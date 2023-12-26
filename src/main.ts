import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', title: 'Home Page', component: HomeComponent },
  { path: 'home', title: 'Home Page', component: HomeComponent },
  { path: 'contacts', title: 'Contacts Page', component: ContactsComponent },
  { path: '**', title: 'Page Not Found', component: NotFoundComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
