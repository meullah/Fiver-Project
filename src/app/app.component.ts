import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Fiver-Project';
  constructor(private router: Router) {
    this.navigate();
  }
  private navigate() {
    this.router.navigateByUrl('home');
  }
}
