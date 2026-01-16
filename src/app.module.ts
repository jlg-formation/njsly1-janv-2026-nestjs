import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TotoController } from './toto/toto.controller';
import { App2Service } from './app2/app2.service';

@Module({
  imports: [],
  controllers: [AppController, TotoController],
  providers: [AppService, App2Service],
})
export class AppModule {}
