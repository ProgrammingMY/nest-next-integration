import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column
    username: string

    @PrimaryKey
    @Column
    userId: string

    @Column
    email: string

    @Column
    password: string
}