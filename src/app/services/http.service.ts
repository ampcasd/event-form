import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { SocialEventCategory } from '../interfaces/social-event.interfaces';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * @returns observable that completes on its own. No need to unsubscribe
   * @param fileName string that doesn't contain the ".json" extension
   */
  pullJSON<T>(fileName: string): Observable<T[]> {

    return this.http.get<T[]>(`./assets/${fileName}.json`);

  }
}
