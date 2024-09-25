import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const jwtToken = getJwtToken()
  var cloned = req.clone({
    setHeaders: {
      Authorization: `Bearer ${jwtToken}`
    }
    })
  return next(cloned)
  }

function getJwtToken(): string | null {
  return localStorage.getItem('JWT_TOKEN')
}
