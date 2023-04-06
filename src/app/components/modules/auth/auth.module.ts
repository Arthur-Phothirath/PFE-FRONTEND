import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    AuthRoutingModule,
    HttpClientModule,
    TranslateModule
    .forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: (translate: TranslateService) => {
        const browserLang = translate.getBrowserLang();
        translate.setDefaultLang(browserLang ? browserLang : 'fr');
        return browserLang;
      },
      deps: [TranslateService],
    },
  ],
})
export class AuthModule {}
