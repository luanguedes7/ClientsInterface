import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { ClientsService } from 'src/app/clients.service';
import { ServiceProvided } from '../ServiceProvided';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {

  clients: Client[] = [];
  serviceProvided: ServiceProvided;

  constructor(private clientsService: ClientsService) { 
    this.serviceProvided = new ServiceProvided();
  }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe( response => this.clients = response);
  }

  onSubmit() {
    console.log(this.serviceProvided)
  }

}
