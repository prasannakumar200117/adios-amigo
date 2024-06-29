import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { CheckboxExmpComponent } from './checkbox-exmp/checkbox-exmp.component'; // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HighlightDirective,
    CheckboxExmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
