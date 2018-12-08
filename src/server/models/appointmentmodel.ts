import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Appointment extends Model<Appointment> {

    @Column
    client_id: string;

    @Column
    date: string;

    @Column
    start_time: string;

    @Column
    end_time: string;

    @Column
    stylist_id: string;

    @Column
    color_card_id: string;

    @Column
    amount_charged: string;

    @Column
    service_type: string;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}