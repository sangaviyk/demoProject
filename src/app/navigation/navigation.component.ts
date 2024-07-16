import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.less'
})
export class NavigationComponent {

}
