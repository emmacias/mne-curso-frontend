import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    rutaBase = 'http://localhost:64529/api';

    constructor(
        private httpClient: HttpClient
      ) { }

    ObtenerElementos(modulo: string) {
        return this.httpClient.get(`${this.rutaBase}/${modulo}/no-paginados`);
    }

    ObtenerCamposDeProducto(productoId: number) {
        return this.httpClient.get(`${this.rutaBase}/itemcampo?itemId=${productoId}`);
    }

    GetSaldo() {
        return this.httpClient.get(`${this.rutaBase}/saldo`);
    }

    /******************/

    Gets(rutaEspecifica: string, cantidad: number, pagina: number, textoBusqueda: string) {
        let params = new HttpParams();

        params = params.append('cantidad', cantidad);
        params = params.append('pagina', pagina);
        params = params.append('textoBusqueda', textoBusqueda);
    
        return this.httpClient.get(`${this.rutaBase}/${rutaEspecifica}`, { params });
    }

    Get(rutaEspecifica: string, id: number) {
        return this.httpClient.get(`${this.rutaBase}/${rutaEspecifica}/${id}`);
    }

    Post(rutaEspecifica: string, object: any) {
        return this.httpClient.post(`${this.rutaBase}/${rutaEspecifica}`, object);
    }
    
    Put(rutaEspecifica: string, id: number, object: any) {
        return this.httpClient.put(`${this.rutaBase}/${rutaEspecifica}/${id}`, object);
    }
    
    Delete(rutaEspecifica: string, ids: number[]) {    
        const options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          body: ids
        };
    
        return this.httpClient.delete(`${this.rutaBase}/${rutaEspecifica}`, options);
    }

    GetFormData(id: number, rutaEspecifica: string) {
        if (id) {
          return this.httpClient.get(`${this.rutaBase}/${rutaEspecifica}/get-form-data?id=${id}`);
        }
    
        return this.httpClient.get(`${this.rutaBase}/${rutaEspecifica}/get-form-data`);
    }
}