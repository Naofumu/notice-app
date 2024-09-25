import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotificationComponent } from './notification/notification.component';

export const routes: Routes = [
    {
        path: 'auth', component: AuthComponent,
    },
    {
        path: 'notice', component: NotificationComponent,
    },
    {
        path: '',
        redirectTo: '/auth', pathMatch: 'full'
    },
];
