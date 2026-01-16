import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TotoController } from './toto/toto.controller';

@Module({
  imports: [],
  controllers: [AppController, TotoController],
  providers: [AppService],
})
export class AppModule {}
