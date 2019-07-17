import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() i = 1;
  @Input() item: any = {};
  @Output() delete = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  deleteArticle() {
    this.delete.emit(this.item.id);
  }

}
