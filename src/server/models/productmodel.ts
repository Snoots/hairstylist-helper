import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Product extends Model<Product> {

    @Column
    line_id: number;

    @Column
    description: string;

    @Column
    is_permanent: boolean;

    @Column
    product_category_id: number;

    @Column
    size: number;

    @Column
    standard_inventory_stock: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}