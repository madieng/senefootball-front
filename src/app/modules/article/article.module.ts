import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ArticleRoutingModule } from "./article-routing.module";
import { ArticleDetailsComponent } from "./article-details/article-details.component";
import { ArticlesListComponent } from "./articles-list/articles-list.component";
import { ArticleItemComponent } from "./article-item/article-item.component";
import { NavbarComponent } from "../navs/navbar/navbar.component";
import { NavLeftComponent } from "../navs/nav-left/nav-left.component";
import { NavRightComponent } from "../navs/nav-right/nav-right.component";

const components = [
  ArticleDetailsComponent,
  ArticlesListComponent,
  ArticleItemComponent,
  NavbarComponent,
  NavLeftComponent,
  NavRightComponent
];

const modules = [CommonModule, ArticleRoutingModule, HttpClientModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components]
})
export class ArticleModule {}
