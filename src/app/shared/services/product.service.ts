import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IProduct } from "src/app/product/products/IProduct";
import { LogService } from "../logger/log.service";

@Injectable({ providedIn: 'root' })
export class ProductService {

    private productsUrl = 'http://localhost:8150/products';

    constructor(private logService: LogService, private http: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productsUrl).pipe(tap(data => this.logService.info(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse): Observable<any> {

        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `An error occured ${error.error.message}`;
        }
        else {
            errorMessage = `Server returned code : ${error.status}, error message is ${error.message}`;
        }
        this.logService.error(errorMessage);
        return throwError(errorMessage);
    }

}