import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Retailer extends Model<Retailer> {

    @Column
    name: string;

    @Column
    phone_number: number;

    @Column
    address: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}