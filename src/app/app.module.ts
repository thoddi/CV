import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ProjectsComponent } from './projects/projects.component';
import { BorderComponent } from './border/border.component';
import { ThisProjectComponent } from './this-project/this-project.component';
import { InstaposComponent } from './instapos/instapos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    ExperienceComponent,
    KnowledgeComponent,
    ProjectsComponent,
    BorderComponent,
    ThisProjectComponent,
    InstaposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'about', component: AboutComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'knowledge', component: KnowledgeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/this-project', component: ThisProjectComponent },
      { path: 'projects/instapos', component: InstaposComponent },
      { path: '', component: HeaderComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
