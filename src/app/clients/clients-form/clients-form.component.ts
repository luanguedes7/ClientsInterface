import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success: boolean = false;
  errors: String[] = [];
  id: number = 0;

  constructor(private service: ClientsService, private router: Router, private activatedRoute : ActivatedRoute) {

    this.client = new Client();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params && params['id']) {
        this.id = params['id'];
  
        this.service.getClientById(this.id).subscribe(
          response => this.client = response,
          errorResponse => this.client = new Client()
        );
      }
    });
  }

  onSubmit() {

    if (this.id) {

      this.service.update(this.client).subscribe( response => {
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.success = false;
        this.errors = ["Update Client Error."];
      })

    } else {

      this.service.save(this.client).subscribe( response => {
        this.success = true;
        this.errors = [];
        this.client = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })

    }
    
  }

  goBackClientList() {
    this.router.navigate(["/clients-list"])
  }

}
