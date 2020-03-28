import { ArticleService } from "./../../shared/services/article.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Article } from "../../shared/interfaces/article";

@Component({
  selector: "app-article-details",
  templateUrl: "./article-details.component.html",
  styleUrls: ["./article-details.component.scss"]
})
export class ArticleDetailsComponent implements OnInit {
  public article: Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.articleService.getArticleBySlug(params.get("slug"));
        })
      )
      .subscribe(article => {
        const data = article["hydra:member"];
        this.article = data.length ? data[0] : {};
      });
  }
}
