import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbar} from '@angular/material/toolbar';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, MatCardHeader, MatCard, MatCardContent ,MatCardModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {}
