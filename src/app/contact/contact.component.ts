import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: 'Contact Me ☎️',
    subtitle: 'Discuss a project or just want to say hi? My Inbox is open for all.',
    number: '+55 75 9 91651825',
    email_address: 'jefte.goes@hotmail.com',
  };

  constructor() {}

  ngOnInit(): void {}
}
