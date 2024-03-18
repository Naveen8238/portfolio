import { Component, OnInit } from '@angular/core';
import { company, imageUrl, profile, role } from 'src/app/custom.data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  image:any=imageUrl;
  profile:any=profile;
  role:any=role;
  company:any=company;
  constructor() { }

  ngOnInit() {}

}
