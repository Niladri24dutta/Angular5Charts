import { Component ,Input} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common/src/directives/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Angular 5 with bootstrap 3.x and Chartjs';
}
