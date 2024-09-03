import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  user: any;

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((data)=> {
      console.log(data);
      this.user = data;
    })
  }

}
