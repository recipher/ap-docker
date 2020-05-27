import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate, IsOptional } from 'class-validator';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 512 })
  text: string;

  @Column({ length: 128 })
  from: string;

  @Column()
  @IsDate()
  @IsOptional()
  sentAt?: Date;
}
