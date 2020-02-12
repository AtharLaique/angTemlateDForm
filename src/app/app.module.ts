import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//#STEP0:
//#Unlock the template driven form by importing here and adding into imports array;
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//adding here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
