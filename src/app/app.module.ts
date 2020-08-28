import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DocumentService } from './document-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/cart.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
    MatButtonModule, 
    MatInputModule, 
    MatSnackBarModule,
    MatSelectModule, 
    MatTooltipModule,
    MatCardModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule, 
    MatRadioModule

  ],
  providers: [DocumentService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
