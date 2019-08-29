import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('f',{static: false}) regForm :NgForm;

  patient = {
    name : '',
    mobile : ''
  }

  submitted = false;

  constructor(private componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit() {
  }

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
     console.log(this.regForm);
     this.patient.name = this.regForm.value.name;
     this.patient.mobile = this.regForm.value.mobile;
     this.submitted = true;
     this.regForm.reset();
     this.showErrorAlert(this.patient.name);
  }

  onHandleError() {
    this.submitted  = false;
  }

  private showErrorAlert(message : string) {
    const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  }

}
