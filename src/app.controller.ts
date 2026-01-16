import { Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/truc')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Put('/titi')
  xxx(): string {
    return this.appService.getHello() + 'eee';
  }
}
