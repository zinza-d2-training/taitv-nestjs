import { Injectable } from '@nestjs/common';
import { match } from 'assert';
import { cat } from './cat.interface';
@Injectable()
//create read update delete
export class CatsService {
  private readonly cats: cat[] = []
  createCat(name: string){
    let id = Math.floor(Math.random() * 9999999)+"";
    this.cats.push({
      id,name
    })
  }
  readAllCat():cat[]{
    return this.cats;
  }
  readCat(id:string):cat|{}{
    let catRes = this.cats.find((cat:cat)=>cat.id==id)
    if(!catRes){
      return {}
    }else{
      return catRes
    }
  }
}
