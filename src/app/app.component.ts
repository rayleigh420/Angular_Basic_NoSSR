import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Test1Component } from './components/Test1/test1.component';
import { Test2Component } from './components/Test2/test2.component';
import { Test3Component } from './components/test3/test3.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        Test1Component,
        Test2Component,
        Test3Component,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'angular_basic';
    text_code = '';

    handleChangeCode(event: string) {
        console.log({ event });
        this.text_code = event;
    }
}
