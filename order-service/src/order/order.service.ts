import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entity/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) {}

  async createOrder(orderData: Partial<Order>): Promise<Order> {
    const newOrder = this.orderRepository.create(orderData);
    return this.orderRepository.save(newOrder);
  }

  async updateOrder(id: string, updateData: Partial<Order>): Promise<Order> {
    await this.orderRepository.update(id, updateData);
    return this.orderRepository.findOne({ where: { id } });
  }

  async deleteOrder(id: string): Promise<void> {
    await this.orderRepository.delete(id);
  }

  async getOrderById(id: string): Promise<Order> {
    return this.orderRepository.findOne({ where: { id } });
  }

  async getOrdersByCustomer(customerId: string): Promise<Order[]> {
    return this.orderRepository.find({ where: { customerId } });
  }
}
