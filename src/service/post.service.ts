import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Post} from "../model/post";


const API_URL = environment.apiURL + '/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  // getTop4(): Observable<Post[]> {
  //   return this.http.get<Post[]>(API_URL + '/top-4');
  // }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL);
  }

  create(post: Post): Observable<any> {
    return this.http.post<any>(API_URL, post);
  }

  getAllByCategoryId(id: string): Observable<Post[]> {
    // console.log(API_URL+`/${id}`)
    return this.http.get<Post[]>(API_URL + `/category/${id}`);
  }

  get(id: string): Observable<Post> {
    return this.http.get<Post>(API_URL + `/${id}`);
  }

  // addComment(id, comment): Observable<CommentForm> {
  //   return this.http.post<CommentForm>(API_URL + `/${id}/comments`, comment);
  // }
  //
  // getAllLikeById(id): Observable<LikePost[]> {
  //   return this.http.get<LikePost[]>(API_URL + '/' + id + '/post-likes');
  // }
}
