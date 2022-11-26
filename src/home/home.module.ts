import { Module } from '@nestjs/common';
import { HomesController } from './controller/homes/homes.controller';
import { HomeService } from './services/home/home.service';

@Module({
  controllers: [HomesController],
  providers: [HomeService]
})
export class HomeModule {}
