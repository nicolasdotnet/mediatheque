import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Album from 'src/app/models/album.model';
import Film from 'src/app/models/film.model';
import { AlbumHttpService } from 'src/app/services/album-http.service';
import { FilmHttpService } from 'src/app/services/film-http.service';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss'],
})
export class ProductShowComponent implements OnInit {
  product!: any;
  typeProduct!:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceFilm: FilmHttpService,
    private serviceAlbum: AlbumHttpService
  ) {}

  ngOnInit(): void {
    console.log('Init');
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.setSubscriptions(type, id);
  }

  /**
   *  Méthode pour retrouver UN film
   * @param id
   */
  private subscribeFilm(id: number): void {
    this.serviceFilm.find(id).subscribe((film) => (this.product = film));

    console.log(this.product.nom);
  }

  /**
   *  Méthode pour retrouver UN album
   * @param id
   */
  private subscribeAlbum(id: number): void {
    this.serviceAlbum.find(id).subscribe((album) => (this.product = album));

    console.log(this.product.nom);
  }

  /**
   * Méthode pour sélectioner la bonne méthode subscribe
   * @param type
   * @param id
   */
  private setSubscriptions(type: string | null, id: string | null): void {
    console.log('setSubscriptions');
    console.log('type', type);
    console.log('id', id);
    if (id && type === 'albums') {
      console.log('album');
      this.subscribeAlbum(+id);
      this.typeProduct = 'albums'
    } else if (id && type === 'films') {
      console.log('films');
      this.subscribeFilm(+id);
      this.typeProduct = 'films'
    } else if (!id || !type) {
      this.router.navigate(['/not-found']);
    }
  }
}
