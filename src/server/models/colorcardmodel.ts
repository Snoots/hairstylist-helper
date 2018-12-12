import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class ColorCard extends Model<ColorCard> {

    @Column
    client_id: number;

    @Column
    comments: string;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
}