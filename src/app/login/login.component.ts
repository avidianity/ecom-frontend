import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { HttpService } from '@app/http.service';
import { StateService } from '@app/state.service';
import { Router } from '@angular/router';

import { LoginResponse } from '@contracts/common.contract';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    protected url = '/auth/login';
    constructor(
        private toastr: ToastrService,
        private http: HttpService,
        private state: StateService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    username = '';
    password = '';
    processing = false;

    authenticate(event: Event): void {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.processing = true;

        const headers = new HttpHeaders({
            Accept: 'application/json',
        });

        this.http
            .post<LoginResponse>(
                this.url,
                {
                    username: this.username,
                    password: this.password,
                    email: this.username,
                },
                headers
            )
            .then((response) => {
                this.state.set('user', response.user);
                this.state.set('token', response.token);
                this.router.navigate(['/dashboard']);
            })
            .catch((error: HttpErrorResponse) => {
                this.toastr.error(error.error.message);
            })
            .finally(() => (this.processing = false));
    }
}
