import { Injectable } from '@angular/core';
import {BehaviorSubject, filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private appEvent: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }

  public broadCast(eventName: string, eventData: any) {
    this.appEvent.next({
      eventName, eventData
    });
  }

  public listen(eventName: string) {
    return this.appEvent.asObservable()
      .pipe(
        filter(value => !!value && value.eventName === eventName)
      );
  }
}
