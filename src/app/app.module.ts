import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
doGETWithHeaders() {
  console.log("GET WITH HEADERS");
  let headers = new Headers();
  headers.append('Authorization', btoa('username:password'));
  let opts = new RequestOptions();
  opts.headers = headers;
  let url = `${this.apiRoot}/get`;
  this.http.get(url, opts).subscribe(
    res => console.log(res.json()),
    msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
  );
}
*/