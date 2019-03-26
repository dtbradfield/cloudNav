import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  sending: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSend() {
    this.sending = true;
    setInterval(() => {
      this.sending = false;
    }, 2000)
  }

}
