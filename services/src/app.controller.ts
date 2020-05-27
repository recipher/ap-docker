import { Controller, Get } from '@nestjs/common';
import { AppService, AppInfo } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): AppInfo {
    return this.appService.getInfo();
  }
}
