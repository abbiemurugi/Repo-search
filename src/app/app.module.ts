import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RepoService } from './repo.service'
import { AppComponent } from './app.component';
import { RepoComponent } from './repo/repo.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent],
})
export class AppModule { }