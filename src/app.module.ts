import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArmyModule } from './army/army.module';

@Module({
  imports: [ArmyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
