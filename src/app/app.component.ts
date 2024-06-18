import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Component1Component } from '../Component/component1/component1.component';
import { Component2Component } from '../Component/component2/component2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,Component1Component,Component2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoService';
}
