import {HammerGestureConfig, HAMMER_GESTURE_CONFIG, BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import 'hammerjs/hammer';

export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
        'swipe': {velocity: 0.4, threshold: 20} // override default settings
    };
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [{
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
