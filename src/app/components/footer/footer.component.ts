import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  networks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sgonzaec',
      icon: '../../../assets/githubicon.png',
      background: '#333',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/simon-gonzalez-e/',
      icon: '../../../assets/linkedinicon.png',
      background: '#0077b5d4',
    },
    {
      name: 'Mail me',
      url: 'mailto:simongonzalezechavarria@gmail.com',
      icon: '../../../assets/mailicon.png',
      background: '#006cff',
    },
  ];
}
