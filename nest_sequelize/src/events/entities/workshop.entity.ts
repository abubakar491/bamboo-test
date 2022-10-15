import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize';
import { Injectable } from '@nestjs/common';
import Event from './event.entity';

@Injectable()
@Table
export default class Workshop extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  start: string;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  end: string;

  @BelongsTo(() => Event)
  event: Event;
  @ForeignKey(() => Event)
  @Column({
    type: 'integer',
    defaultValue: null,
  } as ModelAttributeColumnOptions)
  eventId: number;

  @Column
  name: string;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  createdAt: string;

  
}
