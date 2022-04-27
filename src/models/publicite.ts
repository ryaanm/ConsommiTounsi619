import { Canal } from "./canal";
import { Cible } from "./cible";

export class Publicite {
        idPublicite : number;
        nom : string;
        dateDebut : Date;
        dateFin : Date;
        image : string;
        nbreVueInitial: number;
        nbreVueFinal: number;
        numPropPublicite: number;
        prixPublicite: number;
        typePublicite: string;
        description: string;
        cible : Cible;
        canal :Canal;
        idUser: number;

}
