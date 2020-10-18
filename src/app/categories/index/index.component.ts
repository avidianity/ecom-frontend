import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { HttpService } from '@app/http.service';
import { StateService } from '@app/state.service';
import { Category } from '@contracts/category.contract';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-category-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
    url = '/categories';
    headers = new HttpHeaders({
        Accept: 'application/json',
    });
    categories: Array<Category> = [];
    selected: Category | null;
    constructor(
        private http: HttpService,
        private state: StateService,
        private toastr: ToastrService
    ) {
        if (this.state.has('categories')) {
            this.categories = this.state.get('categories') || [];
        }
        if (this.categories.length > 0) {
            this.selected = this.categories[0];
        }
    }
    ngOnInit(): void {
        this.state.listen<Array<Category>>('categories', (categories) => {
            categories.forEach((category) => {
                const exists = this.categories.find(
                    (item) => item._id === category._id
                );
                if (exists === undefined) {
                    this.categories.push(category);
                } else {
                    const index = this.categories.indexOf(exists);
                    this.categories.splice(index, 1, category);
                }
            });
        });
        this.refresh();
    }

    select(category: Category, event: Event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.selected = category;
    }

    refresh() {
        this.http
            .get<Array<Category>>(this.url, this.headers)
            .then((categories) => {
                this.state.set('categories', categories);
            })
            .catch((error: HttpErrorResponse) => {
                this.toastr.error('Unable to fetch categories.');
            });
    }
}
