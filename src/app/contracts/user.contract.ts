import { Model } from './model.contract';

export interface User extends Model {
    email: string;
    username: string;
    password: string;
    provider: string;
    type: string;
}
