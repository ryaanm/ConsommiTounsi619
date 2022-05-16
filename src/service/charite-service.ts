import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Charite } from 'src/models/charite';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChariteService {
  readonly API_URL3 = 'http://localhost:8089/SpringMVC/charite';
  constructor(private httpClient: HttpClient) { }
  getCharites() {
    return this.httpClient.get<Charite[]>(`${this.API_URL3}/retrieve-all-chars`)
  }
  addCharite(charite: any) {
    let idUser = 1;
    const optionRequete = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      })
    };

    return this.httpClient.post(`${this.API_URL3}/add-charite`, charite, optionRequete)
  }
  modifyCharite(charite: any) {
    return this.httpClient.put(`${this.API_URL3}/modify-charite`, charite)
  }
  removeCharite(id_charite: any) {
    return this.httpClient.delete(`${this.API_URL3}/remove-charite/${id_charite}`)
  }
  searchChariteByName(nom: string): Observable<Charite[]> {
    return this.httpClient.get<Charite[]>(this.API_URL3 + '/retrieve-ChariteByNom/' + nom);
  }

}
