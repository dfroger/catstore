import { ICustomElementViewModel } from 'aurelia';

import { ApiService } from '../../services/api-service';

export class Products implements ICustomElementViewModel {
    private products = [];

    constructor(private api: ApiService) {
    }

    async binding(): Promise<any> {
        this.products = await this.api.getProducts();
    }
}
