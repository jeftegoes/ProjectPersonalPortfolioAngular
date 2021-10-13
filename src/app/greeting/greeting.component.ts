import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  greeting = {
    username: 'Jefté Goes',
    title: "Hi all, I'm Jefté Goes",
    subTitle: 'A passionate Software Developer 🚀',
    resumeLink: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
