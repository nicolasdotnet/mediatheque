import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Film from '../models/film.model';

const apiUrl = environment.API_URL + 'films';
@Injectable({
  providedIn: 'root',
})
export class FilmHttpService {
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Film[]> {
    return this.http.get<Film[]>(apiUrl);
  }

  public save(film: Film): Observable<Film> {
    return this.http.post<Film>(apiUrl, film);
  }

  public update(film: Film): Observable<Film> {
    return this.http.put<Film>(`${apiUrl}/${film.id}`, film);
  }

  public find(id: number): Observable<Film> {
    return this.http.get<Film>(`${apiUrl}/${id}`);
  }

  public delete(id: number) {
    return this.http.delete(`${apiUrl}/${id}`);
  }
}
