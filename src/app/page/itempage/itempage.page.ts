import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.page.html',
  styleUrls: ['./itempage.page.scss'],
})
export class ItempagePage implements OnInit {
  project:any="";
  constructor(private route:ActivatedRoute) {
   }

  ngOnInit() {
    this.route.queryParams.subscribe((params:any)=>{
    this.project=params;
    })
  }

}
