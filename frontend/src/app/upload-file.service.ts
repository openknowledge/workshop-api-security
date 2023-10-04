import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) {
  }

  upload(blob: Blob, fileName: string): Observable<any> {
    let endPoint = 'http://localhost:4000/customers/0815/images/' + fileName; //use your own API endpoint
    let headers = new HttpHeaders();

    let options = {headers: headers};
    return this.http.put(endPoint, blob, options);
  }

}
