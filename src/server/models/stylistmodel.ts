import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table
export class Stylist extends Model<Stylist> {

@Column
 country: string;

@Column
 exchangerate: number;

@CreatedAt
 @Column
 createdAt: Date;

@UpdatedAt
 @Column
 updatedAt: Date;
}