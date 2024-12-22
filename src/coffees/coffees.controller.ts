import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll() {
        return "All coffees"
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
}
