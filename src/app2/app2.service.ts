import { Injectable } from '@nestjs/common';

@Injectable()
export class App2Service {
  getHello(): string {
    const r = Math.random();
    return 'Hello World! 22222' + r;
  }
}
