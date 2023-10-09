import { Component } from '@angular/core';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-profile';
  showAlert = false;
  messageAlert = '';
  typeAlert = '';

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alert$.subscribe((res: any) => {
      this.showAlert = true;
      this.messageAlert = res.message;
      this.typeAlert = `alert-${res.type}`;
      setTimeout(() => this.showAlert = false, res.timeout);
    });
  }
}
