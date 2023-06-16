import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
