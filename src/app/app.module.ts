import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherObjectComponent } from './weather-object/weather-object.component';
import { WeatherServiceService } from './weather-service.service'
import { SessionServiceService } from './session-service.service';
import { CelsiusPipe } from './celsius.pipe';
import { ThumbHoverDirective } from './thumb-hover.directive';
import { AboutAppComponent } from './about-app/about-app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';

const appRoutes: Routes = [
  { path: 'home', component: AppHomeComponent },
  { path: 'aboutUs',      component: AboutAppComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component:  AppHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherObjectComponent,
    CelsiusPipe,
    ThumbHoverDirective,
    AboutAppComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes 
    )
  ],
  providers: [WeatherServiceService, SessionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
