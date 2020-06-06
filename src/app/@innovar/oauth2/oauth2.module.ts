import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GithubButtonComponent} from './github-button/github-button.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'oauth/github/:id',
    component: GithubButtonComponent
  }
];

@NgModule({
  declarations: [GithubButtonComponent],
  exports: [GithubButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ]
})
export class Oauth2Module {
}
