import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable()

export class publicApiService {
    posturl = "https://reqres.in/api/users";//"https://gorest.co.in/public/v2/users";
    getUrl = "https://reqres.in/api/users?page=1";
    constructor(private httpClient: HttpClient) {
    }
    submitData(user: User): Observable<any> {
        return this.httpClient.post(this.posturl, user);
    }
    getData(): Observable<any> {
        return this.httpClient.get(this.getUrl);
    }
}   
