/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery:PaginationQueryDto) {
    return this.coffeesService.findAll(paginationQuery);
  }

  // @Get("/flavours")
  // findFlavours() {
  //     return "All flavours of coffee"
  // }

  @Get(':id')
  findOne(@Param('id') id: number) {
    // it directly gets the id
    console.log(typeof id)
    return this.coffeesService.findOne('' + id);
  }

  // @Get("/flavours/:flavourId/:coffeeId")
  // sendParams(@Param() params){ // here takes the whole params object
  //     return `This action returns #${params.coffeeId} coffee of #${params.flavourId} flavour`
  // }

  @Post()
  postBody(@Body() body: CreateCoffeeDto) {
    // similar to @Params we can get only single key of the body object if required
    console.log(body instanceof CreateCoffeeDto)
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateCoffeeDto) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
