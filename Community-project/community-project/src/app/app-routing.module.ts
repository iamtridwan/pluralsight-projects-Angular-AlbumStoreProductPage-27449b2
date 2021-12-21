import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/learners/business/business.component';
import { DesignComponent } from './components/learners/design/design.component';
import { DevComponent } from './components/learners/dev/dev.component';
import { LearnersComponent } from './components/learners/learners.component';
import { PhotoComponent } from './components/learners/photo/photo.component';
import { SoftwareComponent } from './components/learners/software/software.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'learner', component: LearnersComponent, 
  children: [
    {path: '', redirectTo: 'business', pathMatch: "full"},
    {path: 'business', component:BusinessComponent},
    {path: 'design', component:DesignComponent},
    {path: 'development', component:DevComponent},
    {path: 'photo', component:PhotoComponent},
    {path: 'software', component:SoftwareComponent},
    
  ] },
  { path: 'sponsor', component: SponsorsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
