import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArmyModule } from './army/army.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';

@Module({
  imports: [ArmyModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'army-webapp',
    password: 'password',
    database: 'army_db',
    entities: [User],
    synchronize: true, // Not recommended for production - issues with data loss
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
