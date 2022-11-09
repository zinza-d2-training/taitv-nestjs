import { Controller, Get, Res, Request } from '@nestjs/common';
import { DogsService } from './dogs.service';
@Controller('dogs')
export class DogsController {
  constructor(private dogService: DogsService){}
  @Get()
  show(){
    return "hello"
  }
}
