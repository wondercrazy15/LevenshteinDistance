import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable()
export class API {

    private baseUrl = "";

    constructor(private http: HttpClient) {
        this.baseUrl = environment.APIURL;
    }

    Post(url: string, data: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl + url}`, data);
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('authToken');
        if (!token) {
            return false;
        } else {
            return true;
        }
    }

}