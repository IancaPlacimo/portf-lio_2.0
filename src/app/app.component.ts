import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {DOCUMENT} from "@angular/common"

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) document:Document){
    document.defaultView 
}
  title = 'Ianca Placimo';
}
