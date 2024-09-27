import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, InputTextModule, PasswordModule, ButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  loginObj: any = {
    "username": "",
    "passwordHash": "" 
  }

  http = inject(HttpClient)
  authService = inject(AuthService)

  constructor(private router: Router) { } 

  login() {
    return this.http.post('http://localhost:5199/api/auth/login', this.loginObj).subscribe((res:any)=>{
      this.authService.storeJwtToken(res.token)
      alert(localStorage.setItem('username', this.loginObj.username))
      this.router.navigate(['/notice'])
      console.log(localStorage.getItem('token'))
    }, error => {
      alert('Login error')
    })
  }

  register() {
    return this.http.post('http://localhost:5199/api/auth/register', this.loginObj).subscribe((res:any)=>{
      localStorage.setItem('username', res.user.username)
      this.authService.storeJwtToken(res.token)
      this.router.navigate(['/notice'])
  }, error => {
    alert('Register error')
  })
}

}
