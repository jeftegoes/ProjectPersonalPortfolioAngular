import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: 'What I doðââï¸',
    subTitle:
      'XXX',
    skills: [
      'â¡ XXX',
      'â¡ XXX',
      'â¡ XXX',
      'â¡ XXX',
      'â¡ XXX',
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
