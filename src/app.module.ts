import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArmyModule } from './army/army.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './config/db';

@Module({
  imports: [ArmyModule, TypeOrmModule.forRoot(DatabaseConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
