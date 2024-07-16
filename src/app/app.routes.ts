import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { IndustriesComponent } from './industries/industries.component';
import { InsightsComponent } from './insights/insights.component';

export const routes: Routes = [
    {title: "ADS | HOME", path:'' , component: HomeComponent},
    {title: "ADS | HOME",path:'home' , component: HomeComponent},
    {title: "ADS | SERVICES",path:'service' , component: ServiceComponent},
    {title: "ADS | ABOUT US", path:'about-us' , component: AboutUsComponent},
    {title: "ADS | INDUSTRIES", path:'industries' , component: IndustriesComponent},
    {title: "ADS | INSIGHTS", path:'insights' , component: InsightsComponent},
    {title: "ADS | NOT FOUND", path:'**' , component: NotfoundComponent},

];
