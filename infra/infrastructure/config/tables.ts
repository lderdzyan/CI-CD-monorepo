
export interface TableConfig {
  name: string;        
  hashKey: string;     
  sortKey?: string;    
  ttlAttribute?: string;  
  streamEnabled?: boolean; 
}

export const tables: TableConfig[] = [
  {
    name: "Users",
    hashKey: "userId",
    streamEnabled: false,
  },
  {
    name: "Orders",
    hashKey: "orderId",
    sortKey: "createdAt",
    ttlAttribute: "ttl",
    streamEnabled: true,
  },
  {
    name: "Events",
    hashKey: "eventId",
    sortKey: "timestamp",
    ttlAttribute: "ttl",
    streamEnabled: true,
  },
  {
    name: "Logs",
    hashKey: "logId",
    ttlAttribute: "ttl",
    streamEnabled: false,
  },
  {
    name: "Sessions",
    hashKey: "sessionId",
    ttlAttribute: "ttl",
    streamEnabled: false,
  },
];

//random a lracrac