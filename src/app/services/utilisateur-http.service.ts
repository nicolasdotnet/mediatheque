import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../models/utilisateur.model';

const apiUrl = environment.API_URL + "utilisateurs";
@Injectable({
  providedIn: 'root'
})
export class UtilisateurHttpService {

  constructor(private http: HttpClient) { };

  public findAll() {
    return this.http.get<Utilisateur[]>(apiUrl);
  }

  public save(utilisateur: Utilisateur) {
    return this.http.post<Utilisateur>(apiUrl, utilisateur);
  }

  public delete(id: number) {
    return this.http.delete(`${apiUrl}/${id}`);
  }
}
