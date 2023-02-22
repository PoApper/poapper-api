import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/info')
  getInfo() {
    return {
      '창립년도': 2010,
      '동아리실': '학생회관 211호',
    };
  }

  @Get('/health/database')
  getDatabaseHello(): Promise<string> {
    return this.appService.showTables();
  }
}
