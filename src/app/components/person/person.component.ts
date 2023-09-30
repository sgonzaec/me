import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  image = '../../../assets/profile.jpeg';
  name = 'Simon Gonzalez Echavarria';
  hi = "Hi There! I'm Simon."
}
