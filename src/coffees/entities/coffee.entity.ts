import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavour } from './flavour.entity/flavour.entity';

@Entity() // sql table 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;

//   @Column('json', { nullable: true }) // stores flavours array in json format and no data is also possible
//   flavours: string[];

    @JoinTable()
    @ManyToMany(()=>Flavour,(flavour)=>flavour.coffees)
    flavours: string[];
}
