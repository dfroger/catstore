import { bindable, HttpClient } from 'aurelia';

export class ProductDetail {
    @bindable private product;

    private image;

    constructor(private http: HttpClient) {
    }

    public async binding(): Promise<void> {
        const request = await this.http.fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg');
        const response = await request.json();
        this.image = response[0].url;
    }

    private addToCart(): void {
        const existingCart = JSON.parse(localStorage.getItem('cart')) ?? [];
        existingCart.push(this.product());
        localStorage.setItem('cat', JSON.stringify(existingCart));
    }
}
