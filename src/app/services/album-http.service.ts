import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Album from '../models/album.model';

const apiUrl = environment.API_URL + "albums";
@Injectable({
  providedIn: 'root'
})
export class AlbumHttpService {

  constructor(private http: HttpClient) { };

  public findAll() : Observable<Album[]> {
    return this.http.get<Album[]>(apiUrl);
  }

  public save(album: Album): Observable<Album> {
    return this.http.post<Album>(apiUrl, album);
  }

  public update(album: Album): Observable<Album> {
    return this.http.put<Album>(`${apiUrl}/${album.id}`, album);
  }

  public find(id: number) : Observable<Album>{
    return this.http.get<Album>(`${apiUrl}/${id}`);
  }

  public delete(id: number) {
    return this.http.delete(`${apiUrl}/${id}`);
  }

}
