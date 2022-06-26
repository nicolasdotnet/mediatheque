import { Component } from '@angular/core';
import { Utilisateur } from './models/utilisateur.model';
import { UtilisateurHttpService } from './services/utilisateur-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mediatheque';

  utilisateurs: Utilisateur[] = [];
  editUtilisateur?: Utilisateur;

  constructor(private service: UtilisateurHttpService) {

    this.service.findAll().subscribe((data) => this.utilisateurs = data)
  }

  onSave(utilisateur: Utilisateur) {
    this.service.save(utilisateur).subscribe((newUtilisateur: Utilisateur) => this.utilisateurs.push(newUtilisateur));
  }

  onDelete(id: number) {

    this.service.delete(id).subscribe(() => { this.utilisateurs = this.utilisateurs.filter(utilisateur => utilisateur.id !== id) })
      ;
  }

  onEdit(utilisateur: Utilisateur) {
    alert(JSON.stringify(utilisateur));
    this.editUtilisateur = utilisateur;

  }


}
