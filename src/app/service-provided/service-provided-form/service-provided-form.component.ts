import { Component, OnInit } from '@angular/core';

import { ClientsService } from 'src/app/clients.service';
import { ServiceProvidedService } from 'src/app/service-provided.service';

import { Client } from 'src/app/clients/client';
import { ServiceProvided } from '../ServiceProvided';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css']
})
export class ServiceProvidedFormComponent implements OnInit {

  clients: Client[] = [];
  serviceProvided: ServiceProvided;

  constructor(private clientsService: ClientsService, private serviceProvidedService: ServiceProvidedService) { 
    this.serviceProvided = new ServiceProvided();
  }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe( response => this.clients = response);
  }

  onSubmit() {
    this.serviceProvidedService.save(this.serviceProvided).subscribe( response => console.log(response));
  }

}
