import { Module } from '@nestjs/common';
import { ArmyController } from './army.controller';
import { ArmyService } from './army.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ArmyController],
  providers: [ArmyService],
})
export class ArmyModule {}
