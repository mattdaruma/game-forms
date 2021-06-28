export interface Work {
    id: string;
    queueId: string;
    formIId: string;
    workData: string[][][];
    listData: string[][][];
    auditLogs?: string
    queueName?: string;
}
