import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  onChangeStatusUser: Subject<boolean> = new Subject<boolean>()

  constructor(private readonly router: Router) { }

  login() {
    sessionStorage.setItem("user", "user logged")
    this.onChangeStatusUser.next(true)
    this.router.navigate(["/clients"])
  }

  logout() {
    sessionStorage.clear()
    this.onChangeStatusUser.next(false)
    this.router.navigate(["/"])
  }

  isLoggedUser(): boolean {
    if (sessionStorage.getItem("user")) return true

    return false
  }
}
