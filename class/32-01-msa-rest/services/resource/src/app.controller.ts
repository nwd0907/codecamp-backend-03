import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/aaa')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @MessagePattern({ cmd22: 'bbb' })
  fetchBoards(data) {
    console.log(data);
    return 'fetchBoards 게시글 데이터 보내주기';
  }
}
