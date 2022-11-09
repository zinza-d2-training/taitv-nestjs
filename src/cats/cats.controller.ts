import { Controller,Get, Res, Request, Redirect, Post } from '@nestjs/common';
import { cat } from './cat.interface';
import { CatsService } from './cats.service';
//create read update delete
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService){}
  @Post()
  createCat(@Request() req, @Res() res){
    let name:string = req.body["name"]
    if(name.trim().length === 0){
      res.status(203).send("Thêm thất bại");
    }else{
      this.catsService.createCat(name);
      res.status(201).send("Thêm thành công");
    }
  }
  @Get()
  readAllCat():cat[]{
    return this.catsService.readAllCat();
  }
  @Get(":id")
  readCat(@Request() req):cat|{}{
    return this.catsService.readCat(req.params["id"])
  }
}
