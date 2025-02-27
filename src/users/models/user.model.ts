import { CreationOptional } from 'sequelize';
import {
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Person } from '../../person/models/person.model';

@Table({})
export class User extends Model {
  declare id: CreationOptional<number>;

  @Column
  declare public login: string;

  @Column
  declare public password: string;

  @ForeignKey(() => Person)
  @Column({ type: DataType.INTEGER })
  declare personId?: number;

  @CreatedAt
  declare createdAt: CreationOptional<Date>;

  @UpdatedAt
  declare updatedAt: CreationOptional<Date>;
}
