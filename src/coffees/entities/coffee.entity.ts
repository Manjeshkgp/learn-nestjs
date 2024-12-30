import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @Column('json', { nullable: true }) // stores flavours array in json format and no data is also possible
  flavours: string[];
}
