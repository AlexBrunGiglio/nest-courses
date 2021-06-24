import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll() {
        return "Get all coffees";
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action return #${id} coffee`;
    }

    @Post()
    createOrUpdate(@Body() body) {
        return body;
    }
}
