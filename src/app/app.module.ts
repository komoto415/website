import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';

import { BannerComponent } from './home/banner/banner.component';

import { AboutMeComponent } from './home/about-me/about-me.component';

import { ResumeComponent } from './home/resume/resume.component';
import { ExperiencesComponent } from './home/resume/experiences/experiences.component';
import { LanguagesComponent } from './home/resume/languages/languages.component';
import { ContactMeComponent } from './home/contact-me/contact-me.component';
import { EducationCardComponent } from './home/resume/education-card/education-card.component';
import { ClassComponentsComponent } from './home/resume/education-card/class-components/class-components.component';
import { ClassSweComponent } from './home/resume/education-card/class-swe/class-swe.component';
import { FlavourOneComponent } from './home/flavour-one/flavour-one.component';
import { FlavourTwoComponent } from './home/flavour-two/flavour-two.component';


import { ProjectsComponent } from './projects/projects.component';
import { WegoServicesComponent } from './projects/wego-services/wego-services.component';
import { CompToAlgoComponent } from './projects/comp-to-algo/comp-to-algo.component';
import { ProjectControllerComponent } from './projects/project-controller/project-controller.component';

import { PageErrorComponent } from './page-error/page-error.component';
import { PageNotFoundComponent } from './page-error/page-not-found/page-not-found.component';
import { MaintenanceComponent } from './page-error/maintenance/maintenance.component';


@NgModule({
    declarations: [
        AppComponent,
        BannerComponent,
        ResumeComponent,
        EducationCardComponent,
        LanguagesComponent,
        ExperiencesComponent,
        ContactMeComponent,
        ClassComponentsComponent,
        ClassSweComponent,
        AboutMeComponent,
        ProjectsComponent,
        HomeComponent,
        FlavourOneComponent,
        FlavourTwoComponent,
        PageNotFoundComponent,
        WegoServicesComponent,
        CompToAlgoComponent,
        ProjectControllerComponent,
        PageErrorComponent,
        MaintenanceComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        FontAwesomeModule // CLI adds AppRoutingModule to the AppModule's imports array
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
