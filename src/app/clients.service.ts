import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './clients/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) {}

  save(client: Client) : Observable<Client> {
      return this.http.post<Client>('http://localhost:8080/api/clients', client)
  }

  getClients() : Client[] {
    let client = new Client();
    client.id = 1
    client.name = "Jose";
    client.cpf = "07670233150"
    client.registerDate = "20/01/2024"

    return [client]
  }

  //getClients() : Observable<Client[]> {
    //  return null;
  //}
}
