import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

import { TtClassDirective } from './directives/tt-class.directive';
import { TtIfDirective } from './directives/tt-if.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { MeraUppercasePipe } from './pipes/mera-uppercase.pipe';
import { AsyncDataComponent } from './components/async-data/async-data.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { BasicDirective } from './directives/basic.directive';
import { DirectiveComponent } from './components/directive/directive.component';
import { BetterDirective } from './directives/better.directive';

@NgModule({
  declarations: [
    AppComponent,
    TtClassDirective,
    TtIfDirective,
    HighlightDirective,
    TooltipDirective,
    TableComponent,
    MeraUppercasePipe,
    AsyncDataComponent,
    ViewChildComponent,
    BasicDirective,
    DirectiveComponent,
    BetterDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
