import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  url = 'https://api-pdf.vercel.app/download';

  downloadPDF(){
    let headers = new HttpHeaders();
    headers  = headers.set('Accept', 'application/pdf');
    return this.http.get(this.url, {headers :headers, responseType: 'blob'})
  }
}
