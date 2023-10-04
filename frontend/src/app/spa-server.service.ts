import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class Response {
  object: any;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpaServerService {

  constructor(private httpClient: HttpClient) {
  }

  findProfileByUsername(username: string): Observable<Response> {
    return this.httpClient.get<Response>('http://localhost:8080/profile/' + username);
  }

}
