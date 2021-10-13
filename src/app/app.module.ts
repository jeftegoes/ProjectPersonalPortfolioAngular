import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { GithubCalendarComponent } from './github-calendar/github-calendar.component';
import { GreetingComponent } from './greeting/greeting.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillProgressComponent } from './skill-progress/skill-progress.component';
import { SoftwareSkillComponent } from './skills/software-skill/software-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SocialMediaComponent,
    GithubCalendarComponent,
    GreetingComponent,
    SkillsComponent,
    SkillProgressComponent,
    SoftwareSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
