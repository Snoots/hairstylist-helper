import { Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class ColorEntry extends Model<ColorEntry> {

    @Column
    color_card_id: number;

    @Column
    process_time: string;

    @Column
    comment: string;

    @CreatedAt
    @Column
    created_at: Date;

    @UpdatedAt
    @Column
    updated_at: Date;
    
}