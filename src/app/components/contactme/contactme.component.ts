import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import customClients from 'src/app/clients/customClients';
import { AlertService } from 'src/app/services/alert.service';
import SendEmail from 'src/app/typings/sendEmail';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent {
  constructor(private alertService: AlertService) { }

  loading: boolean = false;

  onSubmit(data: SendEmail, formControl: NgForm) {
    this.loading = true;
    const body = {
      "name": data.name,
      "phone": data.phone,
      "email": data.email,
      "message": data.message
    };

    customClients.sendEmail(body).then((res) => {
      this.alertService.showAlert(res.message, res.status);
      formControl.resetForm();
      this.loading = false;
    });

  }
}
