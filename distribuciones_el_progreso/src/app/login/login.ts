import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  message = '';

  onSubmit(form: NgForm): void {
    this.message = '';

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.message =
      'El formulario es válido, pero la autenticación aún no está configurada.';
  }
}
