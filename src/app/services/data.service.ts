import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';
import { API_URL } from '../app.tokens';

interface HasId {
    id: number | string;
}

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(@Inject(API_URL) private url: string, private http: HttpClient) { }

    getAll<T>() {
        return this.http.get<T[]>(this.url).pipe(catchError(this.handleError))
    }

    create<T>(entity: T) {
        return this.http.post<T>(this.url, entity).pipe(catchError(this.handleError));
    }

    update<T extends HasId>(entity: T) {
        return this.http.put<T>(this.url + "/" + entity.id, entity).pipe(catchError(this.handleError));
    }

    delete<T extends HasId>(entity: T) {
        return this.http.delete<T>(this.url + "/" + entity.id).pipe(catchError(this.handleError));
    }

    private handleError(error: Response) {
        if (error.status === 404) {
            return throwError(() => new NotFoundError());
        }
        if (error.status === 400) {
            return throwError(() => new BadRequestError());
        }
        return throwError(() => new AppError());
    }

}
