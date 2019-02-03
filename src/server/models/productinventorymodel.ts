import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class ProductInventory extends Model<ProductInventory> {

    @Column
    stylist_id: number;

    @Column
    product_id: number;

    @Column
    quantity: number;

    @Column
    salon_id: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}