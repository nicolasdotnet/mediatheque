import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utilisateur } from 'src/app/models/utilisateur.model';

@Component({
  selector: 'app-utilisateur-formulaire',
  templateUrl: './utilisateur-formulaire.component.html',
  styleUrls: ['./utilisateur-formulaire.component.scss']
})
export class UtilisateurFormulaireComponent implements OnInit {

  @Input() default?: Utilisateur;
  @Output() finish = new EventEmitter();

  form: FormGroup = new FormGroup({});

  constructor(private builder: FormBuilder) {

  }
  ngOnInit(): void {

    this.form = this.builder.group({
      "nom": [this.default?.nom || ''],
      "prenom": [this.default?.prenom || '']
    })

  }

  onSubmit() {
    this.finish.emit(this.form.value);
  }

}
