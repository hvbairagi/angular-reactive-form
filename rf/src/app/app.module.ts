import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TtClassDirective } from './tt-class.directive';
import { TtIfDirective } from './tt-if.directive';
import { HighlightDirective } from './highlight.directive';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    TtClassDirective,
    TtIfDirective,
    HighlightDirective,
    TooltipDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
