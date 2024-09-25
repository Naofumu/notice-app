import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiUrl = 'http://localhost:5000/api/notice'

  constructor(private http: HttpClient) { }

  filterItems(event: any,  items: any) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (items as any[]).length; i++) {
      let item = (items as any[])[i];
      if (item.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    return filtered
  }

  saveNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl, notification)
  }
}

