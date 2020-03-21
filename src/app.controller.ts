import { Controller, All, Query, Body, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @All('/payload')
  getPayload(@Query() query: any, @Body() body: any,  @Req() req): object {
    console.log('------------------------------------');
    console.log('method', req.method);
    console.log('query');
    console.log(JSON.stringify(query, null, 2))
    console.log('body');
    console.log(JSON.stringify(body, null, 2))
    console.log('------------------------------------');
    return { method: req.method, query, body };
  }
}
