// src/app/app.config.ts
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


export const appConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(HttpClientModule) 
  ],
  imports: [
    ProductEditComponent,
  ]
};
