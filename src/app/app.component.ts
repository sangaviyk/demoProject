import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IndustriesComponent } from './industries/industries.component';
import { InsightsComponent } from './insights/insights.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutUsComponent, ServiceComponent, HomeComponent, NavigationComponent, 
    FooterComponent,NotfoundComponent,IndustriesComponent,InsightsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'demoProject';
}
