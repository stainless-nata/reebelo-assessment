import { Entity, Column, PrimaryGeneratedColumn, Double, IntegerType } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  customerId: string;

  @Column('json')
  inventories: { inventoryId: string; quantity: IntegerType; }[];

  @Column()
  status: string;

  @Column({ nullable: true })
  trackingNumber?: string;

  @Column({ nullable: true })
  trackingCompany?: string;
}
