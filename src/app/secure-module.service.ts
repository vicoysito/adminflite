import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class SecureModuleService implements CanActivate{

  constructor() { }

  canActivate(){
    console.info("Validate login")
    return true;
  }
}
