import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  private readonly roles$ = new BehaviorSubject<string[]>([]);
  private readonly user$ = new BehaviorSubject<string>('');


  public getUserRoles() {
    return this.roles$.getValue();
  }

  public getUserRolesObs() {
    return this.roles$.asObservable();
  }

  public setUserRoles(roles: string[]) {
    this.roles$.next(roles);
  }

  public getUserName() {
    return this.user$.getValue();
  }

  public getUserNameObs() {
    return this.user$.asObservable();
  }

  public setUserName(user: string) {
    this.user$.next(user);
  }
}
