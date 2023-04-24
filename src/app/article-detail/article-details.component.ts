import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from 'src/models/article.models';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit{

  articleId: number = 0;

  myArticle! : Article;

  articleList: Article[] = [
    new Article(1, "Article 1"),
    new Article(2, "Article 2"),
    new Article(3, "Article 3")
  ];

  constructor(private route: ActivatedRoute) {
    //this.myArticle = this.articleList.find(article => article.id === this.articleId) as Article

  }

    ngOnInit(): void {
      this.route.paramMap.subscribe((params:ParamMap) => {
        if(params.get('id')) {
          this.articleId = parseInt(params.get("id") as string);
          console.log(this.articleId);
          this.myArticle = this.articleList.find(article => article.id === this.articleId) as Article;
        }
      })
    }
}
