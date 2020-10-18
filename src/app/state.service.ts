import { Injectable } from '@angular/core';

import { StorageItems, ChangeEvent } from '@/app/contracts/common.contract';

@Injectable({
    providedIn: 'root',
})
export class StateService {
    protected storage = window.localStorage;
    protected key = 'ecom-state';
    protected listeners: { [key: string]: Array<ChangeEvent> } = {};

    getStorage() {
        return this.storage;
    }

    getKey() {
        return this.key;
    }

    has(key: string) {
        return key in this.getAll();
    }

    protected getAll(): StorageItems {
        const data = this.storage.getItem(this.key);
        if (!data) {
            return {};
        }
        try {
            return JSON.parse(data);
        } catch (error) {
            return {};
        }
    }

    protected setAll(data: StorageItems) {
        this.storage.setItem(this.key, JSON.stringify(data));
        return this;
    }

    get<T = any>(key: string): T | null {
        if (!this.has(key)) {
            return null;
        }
        return this.getAll()[key];
    }

    set(key: string, value: any) {
        const data = this.getAll();
        data[key] = value;
        this.dispatch(key, value);
        return this.setAll(data);
    }

    listen<T = any>(key: string, callback: ChangeEvent<T>) {
        if (!(key in this.listeners)) {
            this.listeners[key] = [];
        }
        this.listeners[key].push(callback);
        return this;
    }

    protected dispatch(key: string, value: any) {
        if (!(key in this.listeners)) {
            return;
        }
        for (const callback of this.listeners[key]) {
            callback(value, this);
        }
    }
}
