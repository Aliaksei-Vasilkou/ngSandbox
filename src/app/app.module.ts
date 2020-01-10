import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryItemListComponent } from './components/category-item-list/category-item-list.component';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoryItemComponent,
    CategoryItemListComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [CategoryService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
