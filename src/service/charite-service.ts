import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Charite } from 'src/models/charite';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn : 'root'
})
export class ChariteService {
    //readonly API_URL3 = 'http://localhost:8089/SpringMVC/charite';
    //readonly API_URL4 = 'http://localhost:8089/SpringMVC/charite/add-charite/';
    private API_URL3 = environment.API_URL3;
    private API_URL4 = environment.API_URL4;

    constructor(private httpClient : HttpClient) {}

    getCharite(id_charite : any){
        return this.httpClient.get(this.API_URL3+'/retrieve-charite/${id_charite}')
    }
    getCharites(){
        return this.httpClient.get<Charite[]>(this.API_URL3+'/retrieve-all-chars')
   
    }
    addCharite(charite : any){
        return this.httpClient.post(this.API_URL4+'${idUser}', charite)
    }
    removeCharite(id_charite : any){
        return this.httpClient.delete(this.API_URL3+'/remove-charite/${id_charite}')
    }
    modifyCharite(charite : any){
        return this.httpClient.put(this.API_URL3+'/modify-charite', charite)
    }

}
