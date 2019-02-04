import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPage } from './new';

import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    NewPage,
  ],
  imports: [
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: (HttpLoaderFactory),
          deps: [HttpClient]
      },
  }),
    IonicPageModule.forChild(NewPage),
  ],
})
export class NewPageModule {}
