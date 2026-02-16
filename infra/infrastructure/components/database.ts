import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import { tables, TableConfig } from "../config/tables";

interface DatabaseOutputs {
  [tableName: string]: {
    tableName: pulumi.Output<string>;
    tableArn: pulumi.Output<string>;
  };
}

export class Database extends pulumi.ComponentResource {
  public readonly tables: DatabaseOutputs = {};

  constructor(name: string, opts?: pulumi.ComponentResourceOptions) {
    super("custom:component:Database", name, {}, opts);

    tables.forEach((table: TableConfig) => {

      const dynamoTable = new aws.dynamodb.Table(table.name, {
        name: table.name,

        attributes: [
          { name: table.hashKey, type: "S" },
          ...(table.sortKey ? [{ name: table.sortKey, type: "S" }] : []),
        ],

        hashKey: table.hashKey,

        ...(table.sortKey && { rangeKey: table.sortKey }),
        
        billingMode: "PAY_PER_REQUEST",
        
        ttl: table.ttlAttribute
          ? { attributeName: table.ttlAttribute, enabled: true }
          : undefined,
        
        streamEnabled: table.streamEnabled ?? false,
        }, { parent: this }
      );

      this.tables[table.name] = {
        tableName: dynamoTable.name,
        tableArn: dynamoTable.arn,
      };

    });

    this.registerOutputs({
      tables: this.tables,
    });
  }
}
