import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData?:User;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRandomUser()
      .subscribe((data: any) => {
        console.log(data.results[0] as User)
        this.userData = data.results[0];
      });
  }

}
