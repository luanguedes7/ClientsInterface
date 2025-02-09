import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Client[] = [];
  clientSelected: Client = new Client();
  successMessage: string = "";
  errorMessage: string = "";

  constructor(private service: ClientsService, private router: Router) {}

  ngOnInit(): void {
      this.service.getClients().subscribe( response => this.clients = response);
  }

  newRegister() {
      this.router.navigate(["/clients-form"]);
  }

  prepareDelete(client: Client) {
    this.clientSelected = client;
  }

  deleteClient() {
    this.service.delete(this.clientSelected).subscribe( response => {this.successMessage = "Client deleted!", this.ngOnInit()
    }, errorResponse => this.errorMessage =  "Error deletion!");
  }

}
