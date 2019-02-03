import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Client extends Model<Client> {

    @Column
    name: string;

    @Column
    name_short: string;

    @Column
    phone_number: number;

    @Column
    email: number;

    @Column
    address: number;

    @Column
    birthday: number;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}