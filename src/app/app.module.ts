import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { RollOnScrollDirective } from './directives/roll-on-scroll.directive';
import { InformationComponent } from './views/information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    RollOnScrollDirective,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
