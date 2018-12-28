import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Retail extends Model<Retail> {

    @Column
    brand_id: number;

    @Column
    description: string;

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