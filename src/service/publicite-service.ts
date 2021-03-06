import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Publicite } from 'src/models/publicite';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

/*@Injectable({
    providedIn : 'root'
})
export class PubliciteService {
    readonly API_URL = 'http://localhost:8080/SpringMVC/publicite';


    constructor(private httpClient : HttpClient) {}


    getPublicite(idPublicite : any){
        return this.httpClient.get(this.API_URL+'/retrieve-publicite/${idPublicite}')
    }
    getPublicites(){
        return this.httpClient.get<Publicite[]>(this.API_URL+'/retrieve-all-pubs')
   
    }
    addPublicite(publicite : any){
        return this.httpClient.post(this.API_URL2+'${1}', publicite)
    }
    removePublicite(idPublicite : any){
        return this.httpClient.delete(this.API_URL+'/remove-publicite/${idPublicite}')
    }
    modifyPublicite(publicite : any){
        return this.httpClient.put(this.API_URL+'/modify-publicite', publicite)
    }

}
*/
@Injectable({
    providedIn: 'root'
    })
    export class PubliciteService {
    readonly API_URL = 'http://localhost:6868/api/publicite';
    constructor (private httpClient: HttpClient) { }
    getPublicites() {
    return this.httpClient.get<Publicite[]>(`${this.API_URL}/retrieve-all-pubs`)
    }
    addPublicite (publicite: any) {
        let idUser = 1;

    return this.httpClient.post(`${this.API_URL}/add-publicite/${idUser}`, publicite)
    }
    modifyPublicite (publicite: any) {
    return this.httpClient.put(`${this.API_URL}/modify-publicite`,publicite)
    }
    removePublicite(idPublicite: any) {
    return this.httpClient.delete(`${this.API_URL}/remove-publicite/${idPublicite}`)
    }
    totalCost(Canal, dateDebut, dateFin, prixPublicite){
        return this.httpClient.post(`${this.API_URL}/totalCost/${Canal}${dateDebut}${dateFin}/`, prixPublicite)
    }
    searchPubliciteByName(nom: string): Observable<Publicite[]> {
        return this.httpClient.get<Publicite[]>(this.API_URL + '/retrieve-PubliciteByNom/' + nom);
      }
      
}
