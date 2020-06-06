import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export const AUTH_BASE_URL = new InjectionToken<string>('AUTH_BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {
  private authPath: string;

  constructor(@Optional() @Inject(AUTH_BASE_URL)authPath: string, private httpClient: HttpClient) {
    this.authPath = authPath;
  }

  public GetToken(token: string){
    this.httpClient.get(this.authPath + '/api/security/Auth/GitHubLogin').toPromise().then((e) => {
      console.log(e);
    });
  }
}
