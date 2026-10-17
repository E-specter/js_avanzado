import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show required-field errors after submitting an empty form', async () => {
    const form = fixture.debugElement.query(By.directive(NgForm)).injector.get(NgForm);
    component.onSubmit(form);
    fixture.detectChanges();

    const errors = fixture.nativeElement.querySelectorAll('form div p');
    expect(errors.length).toBe(2);
  });

  it('should not claim authentication when valid credentials are submitted', async () => {
    const form = fixture.debugElement.query(By.directive(NgForm)).injector.get(NgForm);
    form.form.setValue({ username: 'usuario', password: 'contrasena' });
    component.onSubmit(form);

    expect(component.message).toContain('la autenticación aún no está configurada');
  });
});
