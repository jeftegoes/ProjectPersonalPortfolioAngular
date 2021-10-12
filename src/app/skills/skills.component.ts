import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: 'What I do💁‍♂️',
    subTitle:
      'XXX',
    skills: [
      '⚡ XXX',
      '⚡ XXX',
      '⚡ XXX',
      '⚡ XXX',
      '⚡ XXX',
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
