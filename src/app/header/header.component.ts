import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  siteName = 'The Will Will Web';
  imgUrl = '/assets/images/logo.png';

  innerHtml = '記載著 <b>Will</b> 在網路世界的學習心得與技術分享';
  constructor() { }

  ngOnInit() {
  }

  clickHanbler($event: MouseEvent) {
    console.log($event);
    if ($event.metaKey || $event.ctrlKey) {
      this.siteName += '!';
    }

  }

}
