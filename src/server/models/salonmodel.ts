import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Salon extends Model<Salon> {

    @Column
    name: string;

    @Column
    hours: string;

    @Column
    address: string;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}