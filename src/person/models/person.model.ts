import { CreationOptional } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({})
export class Person extends Model {
  declare id: CreationOptional<number>;

  @Column
  declare public firstName: string;

  @Column public middleName: string;

  @Column
  declare public lastName: string;

  @Column
  declare public phoneNumber: string;

  @Column
  declare public email: string;
}
