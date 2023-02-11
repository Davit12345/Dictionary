import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {Platform} from '@ionic/angular';
import {HTTP} from '@ionic-native/http/ngx';
import {CommonComponentModule} from './components/common-component/common-component.module';
import {StorageProvider} from './providers/storage';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Platform,
        StorageProvider,
        HTTP,
        SpeechRecognition,
        TextToSpeech,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
