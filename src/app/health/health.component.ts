import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-web', isOnline: true },
  {id: 2, name: 'dev-mail', isOnline: false },
  {id: 3, name: 'prod-web', isOnline: false },
  {id: 4, name: 'dev-mail', isOnline: false },
  {id: 5, name: 'dev-snd', isOnline: true },

];

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
