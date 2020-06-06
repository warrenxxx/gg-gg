import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Oauth2Service} from '../../oauth2.service';

@Component({
  selector: 'app-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.css']
})
export class GithubButtonComponent implements OnInit {

  private AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
  private REDIRECT_URI = 'http://localhost:4200/callback/oauth/github/';
  private CLIENT_ID = '917d9ea48c6079361db7';
  public url = '';

  constructor(private oauth2Service: Oauth2Service, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.url = `${this.AUTHORIZE_URL}?scope=user%3Aemail&client_id=${this.CLIENT_ID}
        &redirect_uri=${encodeURIComponent(this.REDIRECT_URI)}`;

    // let aux = this.route;
    // console.log(aux);
    this.route.params.subscribe((params) => {
      console.log('params', params);
      // if (params.id) {
      //   this.oauth2Service.GetToken(params.id);
      // }
    });
  }

}
