import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demoProject';
  keyWord = '';
  data: any = [];

  constructor(private dataService: DataServiceService) {  }
  ngOnInit(): void {
    this.dataService.dataLoad().subscribe((data) => {
      this.data = data;
    });
  }
  keyupEnter(str) {
    this.keyWord = str;
  }
  deleteItem(id) {
    this.data = this.data.filter((d, i) => {
      return d.id !== id;
    });
  }
}
