import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  client_id = 'fd24ccff7fe54fa4a24fe640e1d8b9ac';
  response_type = 'code';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  authorization() {
    this.authService.authorization(this.client_id, this.response_type).subscribe(data => {console.log(data)});
  }
}
