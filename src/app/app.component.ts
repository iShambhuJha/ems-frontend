import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ems-frontend';
  isLoading: Subject<boolean> = this.authenticationService.isLoading;

  constructor(private authenticationService: AuthenticationService) {
  }
}
