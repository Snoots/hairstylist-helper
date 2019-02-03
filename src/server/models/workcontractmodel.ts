import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class WorkContract extends Model<WorkContract> {

    @Column
    stylist_id: number;

    @Column
    salon_id: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}