import { Model } from './model.contract';

export interface Category extends Model {
    title: string;
    slug: string;
    file_id: string;
    file: any;
}
