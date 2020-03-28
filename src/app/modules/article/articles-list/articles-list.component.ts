import { Article } from "./../../shared/interfaces/article";
import { ArticleService } from "./../../shared/services/article.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-articles-list",
  templateUrl: "./articles-list.component.html",
  styleUrls: ["./articles-list.component.scss"]
})
export class ArticlesListComponent implements OnInit {
  public articles: Article[];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles["hydra:member"];
      console.log(this.articles);
    });
  }
}
