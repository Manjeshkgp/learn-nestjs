/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor (private readonly coffeesService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        // const {limit,offset} = paginationQuery;
        return this.coffeesService.findAll()
    }

    // @Get("/flavours")
    // findFlavours() {
    //     return "All flavours of coffee"
    // }

    @Get(":id")
    findOne(@Param('id') id:string){ // it directly gets the id
        return this.coffeesService.findOne(id)
    }

    // @Get("/flavours/:flavourId/:coffeeId")
    // sendParams(@Param() params){ // here takes the whole params object
    //     return `This action returns #${params.coffeeId} coffee of #${params.flavourId} flavour`
    // }

    @Post()
    postBody(@Body() body){ // similar to @Params we can get only single key of the body object if required
        return this.coffeesService.create(body)
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return this.coffeesService.update(id,body)
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.coffeesService.remove(id)
    }

}
