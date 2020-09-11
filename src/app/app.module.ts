import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescShorteningPipe } from './desc-shortening.pipe';
import { RelationshipModalComponent } from './relationship-modal/relationship-modal.component';
import { RemoveBracketsPipe } from './remove-brackets.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DescShorteningPipe,
    RelationshipModalComponent,
    RemoveBracketsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
