import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { artist } from '../model/Artist';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private url = `${base_url}/musictool/artists`
  private ListaCambio=new Subject<artist[]>()
  constructor(private Http: HttpClient) {}

  list() {
    return this.Http.get<artist[]>(this.url);
  }
  insert(R: artist) {
    return this.Http.post(this.url, R);
  }

  setList(ListaNueva: artist[]) {
    this.ListaCambio.next(ListaNueva);
   }

   getList() {
    return this.ListaCambio.asObservable();
   }

}
