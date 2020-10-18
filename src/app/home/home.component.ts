import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        import('jquery');
        import('popper.js');
        import('bootstrap');

        document.querySelector('body').classList.add('bg-light');
    }
}
