import { Test, TestingModule } from '@nestjs/testing';
import { App2Service } from './app2.service';
import { randomNbr } from '../../test/fixture';

describe('App2Service', () => {
  let service: App2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [App2Service],
    }).compile();

    service = module.get<App2Service>(App2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return Hello', () => {
    // stub Math.random if needed
    jest.spyOn(Math, 'random').mockReturnValue(randomNbr);

    const result = service.getHello();
    // test que Math.random is used in the method once
    expect(Math.random).toHaveBeenCalledTimes(1);
    expect(result).toContain('Hello');
    expect(result).toContain(`Hello World! 22222${randomNbr}`);
  });
});
