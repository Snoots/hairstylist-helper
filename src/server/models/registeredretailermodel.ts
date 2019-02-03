import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class RegisteredRetailer extends Model<RegisteredRetailer> {

    @Column
    retailer_id: number;

    @Column
    salon_id: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}