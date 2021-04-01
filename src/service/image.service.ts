import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Image} from "../model/image";

const API_URL = environment.apiURL + '/images';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Image[]> {
    return this.http.get<Image[]>(API_URL);
  }

  create(image: Image): Observable<any> {
    return this.http.post<any>(API_URL, image);
  }

  getAllByPostId(id: number): Observable<Image[]> {
    return this.http.get<Image[]>(API_URL + `/${id}`);
  }
}
