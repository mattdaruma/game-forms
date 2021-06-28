import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

export interface UserData{
  display: string,
  roles: string[]
}
@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private tokenCache = 'game-forms-jwt-cache';
  private _httpHeaders: HttpHeaders = new HttpHeaders()
  .set('content-type', 'text/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS')
  .set('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token')

  constructor(private _http: HttpClient) {}
  public async getJwt(){
    let webToken = await this._http.get<string>(environment.identityUrl, {headers: this._httpHeaders}).toPromise();
    localStorage.setItem(environment.jwtHeader, webToken)
    return webToken
  }
}
