import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
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
import { sustainabilityComponent } from './sustainability/sustainability.component';
import { OilComponent } from './oil/oil.component';
import { BankingComponent } from './banking/banking.component';
import { RetailComponent } from './retail/retail.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { DatacentreComponent } from './datacentre/datacentre.component';
import { ShippingComponent } from './shipping/shipping.component';

export const routes: Routes = [
    {title: "ITElegant | HOME", path:'' , component: HomeComponent},
    {title: "ITElegant | HOME",path:'home' , component: HomeComponent},
    {title: "ITElegant | SERVICES",path:'service' , component: ServiceComponent},
    {title: "ITElegant | ABOUT US", path:'about-us' , component: AboutUsComponent},
    {title: "ITElegant | INDUSTRIES", path:'industries' , component: IndustriesComponent},
    {title: "ITElegant | INSIGHTS", path:'insights' , component: InsightsComponent},
    {title: "ITElegant | LOGIN", path:'login' , component: LoginComponent},
    {title: "ITElegant | CONTACT US", path:'contact-us' , component: ContactUsComponent},
    {title: "ITElegant | TESTIMMONIALS", path:'testimonials' , component: TestimonialsComponent},
    {title: "ITElegant | ApplicationDevelopment", path:'appDevelopmentComponent' , component: AppDevelopmentComponent},
    {title: "ITElegant | AiSolutions", path:'aiSolutions' , component: AiSolutionsComponent},
    {title: "ITElegant | BusinessConsulting", path:'businessConsulting' , component: BusinessConsultingComponent},
    {title: "ITElegant | BusinessProcessOpt", path:'businessProcessOpt' , component: BusinessProcessOptComponent},
    {title: "ITElegant | CloudInfra", path:'CloudInfra' , component: CloudInfraComponent},
    {title: "ITElegant | Cybersecurity", path:'cyberSecurity' , component: CybersecurityComponent},
    {title: "ITElegant | DataAnalytics", path:'dataAnalytics' , component: DataAnalyticsComponent},
    {title: "ITElegant | DigitalExp", path:'digitalExp' , component: DigitalExpComponent},
    {title: "ITElegant | EngSolutions", path:'engSolutions' , component: EngSolutionsComponent},
    {title: "ITElegant | sustainability", path:'sustainability' , component: sustainabilityComponent},
    {title: "ITElegant | Oil", path:'oil' , component: OilComponent},
    {title: "ITElegant | Banking", path:'banking' , component:BankingComponent },
    {title: "ITElegant | Retail", path:'retail' , component: RetailComponent},
    {title: "ITElegant | Logistics", path:'logistics' , component: LogisticsComponent},
    {title: "ITElegant | Manufacturing", path:'manufacturing' , component: ManufacturingComponent},
    {title: "ITElegant | Warehouses", path:'warehouses' , component: WarehousesComponent},
    {title: "ITElegant | Datacentre", path:'dataCentre' , component: DatacentreComponent},
    {title: "ITElegant | Shipping", path:'shipping' , component: ShippingComponent},
    {title: "ITElegant | NOT FOUND", path:'**' , component: NotfoundComponent},

];
