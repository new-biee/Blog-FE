import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Category} from "../model/category";

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + `/category`);
  }

  createNewCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(API_URL + `/category`, category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(API_URL + `/category/${id}`);
  }

  updateCategory(id?: number, category?: Category): Observable<Category> {
    return this.http.put<Category>(API_URL + `/category/${id}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(API_URL + `/category/${id}`);
  }
}
