import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/app/custom.data';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pro=data
  searchInput:string="";
  constructor(private route:Router) {}
  searchItems() {
    if (this.searchInput) {
      const searchLowerCase = this.searchInput.toLowerCase();
      this.pro = this.pro.filter((eachItem: any) => {
        return eachItem.project.toLowerCase().includes(searchLowerCase);
      });
    }
  }
  navigateToProject(item:any){
    this.route.navigate(['/itempage'],{queryParams:item})
  }
}


