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
  username = '';
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
