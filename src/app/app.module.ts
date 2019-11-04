import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JanuszeComponent } from './janusze/janusze.component';
import { JanuszDetailComponent } from './janusz-detail/janusz-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JanuszSearchComponent } from './janusz-search/janusz-search.component';

@NgModule({
  declarations: [
    AppComponent,
    JanuszeComponent,
    JanuszDetailComponent,
    MessagesComponent,
    DashboardComponent,
    JanuszSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
