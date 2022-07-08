import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  data=[
    {"Name":"Rahul","Age":21,"photo":"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"},
    {"Name":"Reji","Age":43,"photo":"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"},
    {"Name":"Ramu","Age":39,"photo":"https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"},
    {"Name":"Sumesh","Age":40,"photo":"https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="}



  ]
}
