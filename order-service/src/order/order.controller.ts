import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from 'src/entity/order.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() orderData: Partial<Order>): Promise<Order> {
    return this.orderService.createOrder(orderData);
  }

  @Patch(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() updateData: Partial<Order>,
  ): Promise<Order> {
    return this.orderService.updateOrder(id, updateData);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string): Promise<void> {
    return this.orderService.deleteOrder(id);
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<Order> {
    return this.orderService.getOrderById(id);
  }

  @Get()
  async getOrderByCustomer(
    @Query('customerId') customerId: string,
  ): Promise<Order[]> {
    if (!customerId) {
      throw new BadRequestException('Customer ID is required');
    }
    return this.orderService.getOrdersByCustomer(customerId);
  }
}
