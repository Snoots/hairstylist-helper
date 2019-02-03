import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class ProductMeasurement extends Model<ProductMeasurement> {

    @Column
    product_id: number;

    @Column
    quantity: number;

    @Column
    color_entry_id: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}