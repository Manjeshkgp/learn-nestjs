import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Almond Mocha',
      brand: 'Brew',
      flavours: ['Almond', 'Mocha'],
    },
  ];

  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    const coffee = this.coffees.find((obj) => obj.id === +id);
    if(!coffee){
      throw new HttpException(`Coffee with ${id} not foun`,HttpStatus.NOT_FOUND);
    } else
    return coffee
  }
  findCoffeeIndex (id:string) {
    return this.coffees.findIndex((obj) => obj.id === +id);
  }
  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }
  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findCoffeeIndex(id)
    if (existingCoffee) {
      this.coffees[existingCoffee] = updateCoffeeDto;
    }
  }
  remove(id: string) {
    const coffeeIndex = this.findCoffeeIndex(id)
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}