import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpUrlEncodingCodec, HttpHeaders, HttpParameterCodec, HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    private endpoint: string;

    constructor(private httpClient: HttpClient) {
        this.endpoint = "http://" + window.location.hostname + ":8200/api"
    }

    get_vehiculos(): Observable<any> {
        return this.httpClient.get(this.endpoint + "/get_vehiculos",
            { responseType: 'json' })
    }

    insert_vehiculo(load): Observable<any> {
        return this.httpClient.post(this.endpoint + "/insert_vehiculo", load,
            { responseType: 'json' })
    }

    update_vehiculo(load): Observable<any> {
        return this.httpClient.put(this.endpoint + "/update_vehiculo", load,
            { responseType: 'json' })
    }

    delete_vehiculo(load): Observable<any> {
        return this.httpClient.delete(this.endpoint + "/delete_vehiculo", {
            params: load,
            responseType: 'json'
        });
    }

    login(payload): Observable<any> {
        return this.httpClient.post(this.endpoint + "/login", payload, { responseType: 'json' });
    }

    set_session(token) {
        localStorage.setItem("vehiculo", JSON.stringify(token));
    }

    reset_session() {
        localStorage.removeItem("vehiculo");
    }

    get_session() {
        if (localStorage.getItem("vehiculo") && JSON.parse(localStorage.getItem("vehiculo")).token) {
            return JSON.parse(localStorage.getItem("vehiculo"));
        } else {
            return false;
        }
    }
}
      
