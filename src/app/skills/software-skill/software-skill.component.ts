import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  templateUrl: './software-skill.component.html',
  styleUrls: ['./software-skill.component.scss'],
})
export class SoftwareSkillComponent implements OnInit {
  skillsSection = {
    softwareSkills: [
      {
        skillName: '.NET',
        fontAwesomeClassname: 'fab fa-microsoft',
      },
      {
        skillName: 'Sql databases',
        fontAwesomeClassname: 'fas fa-database',
      },
      {
        skillName: 'Html5',
        fontAwesomeClassname: 'fab fa-html5',
      },
      {
        skillName: 'Css3',
        fontAwesomeClassname: 'fab fa-css3-alt',
      },
      {
        skillName: 'Angularjs',
        fontAwesomeClassname: 'fab fa-angular',
      },
      {
        skillName: 'Jenkins',
        fontAwesomeClassname: 'fab fa-jenkins',
      },
      {
        skillName: 'Docker',
        fontAwesomeClassname: 'fab fa-docker',
      },
      {
        skillName: 'Git',
        fontAwesomeClassname: 'fab fa-git',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
