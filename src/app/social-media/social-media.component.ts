import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  
  socialMediaLinks = {
    github: 'https://github.com/jeftegoes',
    linkedin: 'https://www.linkedin.com/in/jefte-goes/',
    email: 'jefte.goes@hotmail.com',
  };

  constructor() {}

  ngOnInit(): void {}
}
