import { Component, Input, OnInit } from '@angular/core';
import { publicApiService } from '../app/services/publicapi.service';
import { User } from './class/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [publicApiService]
})
export class AppComponent implements OnInit {

  title = 'DemoApp';
  fName: string;
  lName: string;
  email: string = "";
  users: User[] = [];
  user: User = new User();

  constructor(private apiService: publicApiService) {
  }

  ngOnInit() {
    // get all users data
    this.apiService.getData().subscribe(
      data => {
        this.users = data.data;
      }
    )

  }

  // this method is responsible to get user data from remote public api.
  getusers() {
    this.apiService.getData().subscribe(
      data => {
        this.users = data.data;
        alert("Fetched Successfully!");
      }
    )
  }
  
 // this method is responsible to save user data to remote public api by post.
  submit() {
    this.user.email = this.email;
    this.user.first_name = this.fName;
    this.user.last_name = this.lName;
    if (this.user.email != "" && this.user.first_name != "" && this.user.last_name != "") {
      this.apiService.submitData(this.user).subscribe(
        data => {
          console.log("better");
          alert("sucess");
          this.email = "";
          this.fName = "";
          this.lName = "";
        }
      )
    }
    else {
      alert("Please fill up missing field(s)!");
    }
  }
}
