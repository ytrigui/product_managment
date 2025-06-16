import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
