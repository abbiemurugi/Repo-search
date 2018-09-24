import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RepoService } from './repo.service'
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component'

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent],
})
export class AppModule { }