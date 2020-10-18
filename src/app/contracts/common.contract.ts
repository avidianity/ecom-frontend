import { StateService } from '@app/state.service';
import { User } from './user.contract';

export interface StorageItems {
    [key: string]: any;
}

export type ChangeEvent<T = any> = (value: T, state: StateService) => void;

export type LoginResponse = {
    message: string;
    token: string;
    user: User;
};
