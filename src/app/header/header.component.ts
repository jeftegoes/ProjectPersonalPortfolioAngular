import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  greeting = {
    username: 'Jefté Goes',
    title: "Hi all, I'm Jefté Goes",
    subTitle:
      'A passionate Software Developer 🚀 having an experience of building .NET and Angular applications with C# / Angular and some other cool libraries and frameworks.',
    resumeLink: 'https://',
  };

  constructor() {}

  ngOnInit(): void {}
}
