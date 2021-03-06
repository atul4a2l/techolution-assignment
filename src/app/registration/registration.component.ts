import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required,Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: ['',[Validators.required,Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]],
      class: ['', [Validators.required]],
      yop:['',[Validators.required,Validators.min(2017)]],
      percentage: ['', [Validators.required,Validators.max(100)]]
  });
  }
  get f() { 
    return this.registerForm.controls; }

  onSubmit() {
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
      this.registerForm.reset();
      console.log(this.registerForm.value)
  }

}
