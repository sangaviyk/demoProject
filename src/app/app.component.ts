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
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { AiSolutionsComponent } from './ai-solutions/ai-solutions.component';
import { BusinessConsultingComponent } from './business-consulting/business-consulting.component';
import { BusinessProcessOptComponent } from './business-process-opt/business-process-opt.component';
import { CloudInfraComponent } from './cloud-infra/cloud-infra.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { DataAnalyticsComponent } from './data-analytics/data-analytics.component';
import { DigitalExpComponent } from './digital-exp/digital-exp.component';
import { EngSolutionsComponent } from './eng-solutions/eng-solutions.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { OilComponent } from './oil/oil.component';
import { BankingComponent } from './banking/banking.component';
import { RetailComponent } from './retail/retail.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { DatacentreComponent } from './datacentre/datacentre.component';
import { ShippingComponent } from './shipping/shipping.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutUsComponent, ServiceComponent, HomeComponent, NavigationComponent, 
    FooterComponent,NotfoundComponent,IndustriesComponent,InsightsComponent,LoginComponent,ContactUsComponent,TestimonialsComponent,
  AboutUsComponent,AppDevelopmentComponent,AiSolutionsComponent,BusinessConsultingComponent,BusinessProcessOptComponent,CloudInfraComponent,
CybersecurityComponent,DataAnalyticsComponent,DigitalExpComponent,EngSolutionsComponent,SustainabilityComponent,OilComponent,BankingComponent,
RetailComponent,LogisticsComponent,ManufacturingComponent,WarehousesComponent,DatacentreComponent,ShippingComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'demoProject';
}
