import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Appointment extends Model<Appointment> {

    @Column
    client_id: number;

    @Column
    date: Date;

    @Column
    start_time: number;

    @Column
    end_time: number;

    @Column
    stylist_id: number;

    @Column
    color_card_id: number;

    @Column
    amount_charged: number;

    @Column
    service_type: string;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}