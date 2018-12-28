import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Sale extends Model<Sale> {

    @Column
    stylist_id: number;

    @Column
    inventory_id: number;

    @Column
    charged: number;

    @Column
    client_id: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}