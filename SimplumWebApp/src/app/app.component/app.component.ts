import { Component } from '@angular/core';
import { routerTransition } from './router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = { left: false, middle: false, right: false};
  name = 'test';
  title = 'SimplumWebApp';

  getState(outlet) {
    console.log(outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }
}
