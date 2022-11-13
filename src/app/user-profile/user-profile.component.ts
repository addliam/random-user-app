import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRandomUser()
      .subscribe((data) => {
        console.log(data)
        this.userData = data
      });
  }

}
