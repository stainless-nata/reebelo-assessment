import { Order } from 'src/entity/order.entity';
import { Repository } from 'typeorm';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    createOrder(orderData: Partial<Order>): Promise<Order>;
    updateOrder(id: string, updateData: Partial<Order>): Promise<Order>;
    deleteOrder(id: string): Promise<void>;
    getOrderById(id: string): Promise<Order>;
    getOrdersByCustomer(customerId: string): Promise<Order[]>;
}
