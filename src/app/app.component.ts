import { Component } from '@angular/core';
import disableDevtool from 'disable-devtool';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fashionista';
  constructor(
  ) {
    // to disable inspect element, f12 button and developer tools
    // disableDevtool();
  }
}
