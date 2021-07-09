import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LogService } from "src/app/shared/logger/log.service";
import { ProductService } from "src/app/shared/services/product.service";

import { IProduct } from "./IProduct";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product List!';
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];
    private _listFilter: string = '';
    private errorMessage: string = '';
    subscription!: Subscription;

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
        this.logService.info("listFilter " + value + ", count : " + this.filteredProducts.length);
    }

    constructor(private logService: LogService, private productService: ProductService) {

    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.logService.info("ngOnInit");
        this.listFilter = '';
        this.subscription = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });

    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
    }

    OnratingClicked(message: string): void {
        this.pageTitle = 'Product List! ' + message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
        this.logService.info("toggleImage : " + this.showImage);
    }
}


