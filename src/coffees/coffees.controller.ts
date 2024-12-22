import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Query() paginationQuery) {
        const {limit,offset} = paginationQuery;
        return `All coffees, Limit = ${limit}, Offset = ${offset}`
    }

    @Get("/flavours")
    findFlavours() {
        return "All flavours of coffee"
    }

    @Get(":id")
    findOne(@Param('id') id:string){ // it directly gets the id
        return `This action returns #${id} coffee`
    }

    @Get("/flavours/:flavourId/:coffeeId")
    sendParams(@Param() params){ // here takes the whole params object
        return `This action returns #${params.coffeeId} coffee of #${params.flavourId} flavour`
    }

    @Post()
    postBody(@Body() body){ // similar to @Params we can get only single key of the body object if required
        return body
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        console.log({body})
        return `This action updates ${id} coffee`
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return `This action removes ${id} coffee`
    }

}
