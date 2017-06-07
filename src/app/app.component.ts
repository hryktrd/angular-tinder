import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    onSwipeleft(idx, event) {
        console.log(event);
    }
    onSwiperight(idx, event) {
        console.log(event);
    }
}


