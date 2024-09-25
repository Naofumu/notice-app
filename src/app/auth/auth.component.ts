import { Component, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
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
      this.router.navigate(['/notice'])
      console.log(localStorage.getItem('token'))
    }, error => {
      alert('Login error')
    })
  }

  register() {
    return this.http.post('http://localhost:5199/api/auth/register', this.loginObj).subscribe((res:any)=>{
      this.authService.storeJwtToken(res.token)
      this.router.navigate(['/notice'])
  }, error => {
    alert('Register error')
  })
}

}
