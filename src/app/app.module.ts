import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { RouterModule } from '@angular/router';
import { AuthModule } from './components/modules/auth/auth.module';
import { ProductModule } from './components/modules/product/product.module';
import { UserModule } from './components/modules/user/user.module';
import { ProfileModule } from './components/modules/profile/profile.module';
import { HomeModule } from './components/modules/home/home.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);

}
  @NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeModule,
    AuthModule,
    ProductModule,
    UserModule,
    ProfileModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
    // defaultLanguage: 'fr',
      loader: {
          provide: TranslateLoader,
          useFactory: (HttpLoaderFactory),
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: LOCALE_ID,
      useFactory: (translate: TranslateService) => {
        const browserLang = translate.getBrowserLang();
        translate.setDefaultLang(browserLang ? browserLang : 'fr');
        return browserLang;
      },
      deps: [TranslateService]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
