import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environmentBACKUP';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BoxArchiveComponent } from './components/box-archive/box-archive.component';
import { UploadingComponent } from './components/uploading/uploading.component';
import { DndDirective } from './dnd.directive';


// var firebaseConfig = {
//   apiKey: process.env['apiKey'],
//   authDomain: process.env['authDomain'],
//   projectId: process.env['projectId'],
//   storageBucket: process.env['storageBucket'],
//   messagingSenderId: process.env['messagingSenderId'],
//   appId: process.env['appId'],
//   measurementId: process.env['measurementId']
// }
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BoxArchiveComponent,
    UploadingComponent,
    DndDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig, 'image-uploader-app'),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'image-uploader-app'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
