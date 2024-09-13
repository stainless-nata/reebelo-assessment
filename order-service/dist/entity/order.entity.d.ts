import { IntegerType } from 'typeorm';
export declare class Order {
    id: string;
    customerId: string;
    inventories: {
        inventoryId: string;
        quantity: IntegerType;
    }[];
    status: string;
    trackingNumber?: string;
    trackingCompany?: string;
}
