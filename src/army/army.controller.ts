import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateArmyDto } from './dto/create-army.dto';
import { UpdateArmyDto } from './dto/update-army.dto';
import { ArmyService } from './army.service';

@Controller('army') // This would be the route - http://localhost:3000/army for this controller
export class ArmyController {
  // Create constructor to inject the service
  constructor(private readonly armyService: ArmyService) {}

  // Get all armies
  @Get()
  // This is used if you want to get the query string from the URL, and specify the type
  getArmies(@Query('type') type: string) {
    return this.armyService.getArmies(type);
  }

  // Get one army
  @Get(':id')
  // This is used if you want to get the ID from the URL, and specify the type
  getArmy(@Param('id') id: string) {
    return this.armyService.getArmy(+id); // The + sign is used to convert the string to a number - type casting
  }

  // Create an army
  @Post()
  createArmy(@Body() createArmyDto: CreateArmyDto) {
    // This is used if you want to get the body of the request
    return this.armyService.createArmy(createArmyDto);
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
