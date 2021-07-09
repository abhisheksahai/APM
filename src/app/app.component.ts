import { Component, OnInit } from '@angular/core';
import { LogService } from './shared/logger/log.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageTitle: string = 'Acme Product Management';

  constructor(private logService: LogService) {

  }

  ngOnInit(): void {
    this.logService.info("ngOnInit")
  }
}