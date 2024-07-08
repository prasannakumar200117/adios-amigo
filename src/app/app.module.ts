import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { CheckboxExmpComponent } from './checkbox-exmp/checkbox-exmp.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { MyCustompipePipe } from './my-custompipe.pipe';
import { MiniTodoComponent } from './mini-todo/mini-todo.component';
import { MiniSearchComponent } from './mini-search/mini-search.component';
import { JsonTableDisplayComponent } from './json-table-display/json-table-display.component'; // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HighlightDirective,
    CheckboxExmpComponent,
    AttributeDirectiveComponent,
    MyCustompipePipe,
    MiniTodoComponent,
    MiniSearchComponent,
    JsonTableDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
