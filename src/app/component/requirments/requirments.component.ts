import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requirments',
  templateUrl: './requirments.component.html',
  styleUrls: ['./requirments.component.css']
})
export class RequirmentsComponent implements OnInit {
  mybikeslist: any;
  public bullet5url: string = "https://news.maxabout.com/wp-content/uploads/2020/01/RE-Classic-500-Tribute-Black-10.jpg"

  constructor() { }

  ngOnInit(): void {
  }
  displaySelectedDropDown(e:any)
  {
    this.mybikeslist = e.target.value;
  }
}
