export class Utilisateur {

    // id: number;
    // nom: string;
    // prenom: string;

    constructor(
        public id: number,
        public nom: string,
        public prenom: string
    ) { }


}

export interface Utilisateur {

    id: number;
    nom: string;
    prenom: string;


}