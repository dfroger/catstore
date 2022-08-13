import { ApiService } from '../../services/api-service';
import { IRouteViewModel } from 'aurelia';
import { inject} from 'aurelia';

@inject(ApiService)
export class Product implements IRouteViewModel {
    //public static parameters: string[] = ['id'];
    public static parameters: string[] = ['no'];
    private product;

    constructor(private api: ApiService) {
    }

    public async load(parameters: { id :string }): Promise<void> {
        this.product = await this.api.getProduct(parameters.id);
    }
}
