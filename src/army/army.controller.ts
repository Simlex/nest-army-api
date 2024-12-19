import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateArmyDto } from './dto/create-army.dto';
import { UpdateArmyDto } from './dto/update-army.dto';

@Controller('army') // This would be the route - http://localhost:3000/army for this controller
export class ArmyController {
  // Get all armies
  @Get()
  getArmies(@Query('type') type: string) {
    // This is used if you want to get the query string from the URL, and specify the type
    return [`Armies of type: ${type}`];
  }

  // Get one army
  @Get(':id')
  getArmy(@Param('id') id: string) {
    // This is used if you want to get the ID from the URL, and specify the type
    return [`Army with ID: ${id}`];
  }

  // Create an army
  @Post()
  createArmy(@Body() createArmyDto: CreateArmyDto) {
    // This is used if you want to get the body of the request
    return {
      name: createArmyDto.name,
    };
  }

  // Update an army
  @Put(':id')
  updateAnArmy(@Param('id') id: string, @Body() updateArmyDto: UpdateArmyDto) {
    return {
      id,
      ...updateArmyDto,
    };
  }

  // Delete an army
  @Delete(':id')
  deleteArmy(@Param('id') id: string) {
    return `Army with ID: ${id} has been deleted`;
  }
}
