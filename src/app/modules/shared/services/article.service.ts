import { Article } from "./../interfaces/article";
import { environment } from "./../../../../environments/environment.prod";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.api}/articles`);
  }

  getArticleBySlug(slug: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.api}/articles?slug=${slug}`);
  }
}
