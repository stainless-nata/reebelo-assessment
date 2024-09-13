import { OrderService } from './order.service';
import { Order } from 'src/entity/order.entity';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(orderData: Partial<Order>): Promise<Order>;
    updateOrder(id: string, updateData: Partial<Order>): Promise<Order>;
    deleteOrder(id: string): Promise<void>;
    getOrderById(id: string): Promise<Order>;
    getOrderByCustomer(customerId: string): Promise<Order[]>;
}
