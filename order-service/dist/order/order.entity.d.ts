export declare class Order {
    id: string;
    customerId: string;
    products: {
        productId: string;
        quantity: number;
    }[];
    status: string;
    trackingNumber?: string;
    trackingCompany?: string;
}
