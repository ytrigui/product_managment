import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // ✅ Add this


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideHttpClient()]
});
