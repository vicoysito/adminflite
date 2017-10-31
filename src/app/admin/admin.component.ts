import { Component, OnInit } from '@angular/core';
import { SecureModuleService } from '../secure-module.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[SecureModuleService]

})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
