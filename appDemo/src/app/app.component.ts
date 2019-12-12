import { Component } from '@angular/core';
import { Clase1, Clase2, Clase3 } from './clases';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userLogged: boolean = false

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
    this.userLogged = this.authService.isLoggedUser()

    this.authService.onChangeStatusUser.subscribe(
      (status: boolean) => this.userLogged = status
    )
  }
}
