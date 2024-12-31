import { Column, Entity, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Coffee } from "../coffee.entity";

@Entity() // class ABC => table abc, here sql table is flavour
export class Flavour {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @JoinTable()
    coffees: Coffee[];
}
