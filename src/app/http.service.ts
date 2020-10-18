import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    protected url = 'http://localhost:8000/api';

    constructor(private client: HttpClient) {}

    protected append(keyword: string) {
        return `${this.url}${keyword}`;
    }

    getUrl() {
        return this.url;
    }

    get<T>(url: string, headers?: HttpHeaders) {
        return this.client
            .get<T>(this.append(url), { headers })
            .toPromise();
    }

    post<T>(url: string, body: any, headers?: HttpHeaders) {
        return this.client
            .post<T>(this.append(url), body, { headers })
            .toPromise();
    }

    put<T>(url: string, body: any, headers?: HttpHeaders) {
        return this.client
            .put<T>(this.append(url), body, { headers })
            .toPromise();
    }

    patch<T>(url: string, body: any, headers?: HttpHeaders) {
        return this.client
            .patch<T>(this.append(url), body, { headers })
            .toPromise();
    }

    delete<T>(url: string, headers?: HttpHeaders) {
        return this.client
            .delete<T>(this.append(url), { headers })
            .toPromise();
    }
}
