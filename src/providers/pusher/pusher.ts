import { Injectable } from '@angular/core';

import { config } from '../../config';

import * as Pusher from "pusher-js";

/*
  Generated class for the PusherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PusherProvider {
  pusher: any;
  messagesChannel: any;
  config: any;

  constructor() {
    this.config = config.pusher;
    this.initializePusher();
  }

  initializePusher(): void {
    this.pusher = new Pusher(this.config.appKey, {
          cluster: this.config.cluster,
          encrypted: true
      });

    this.messagesChannel = this.pusher.subscribe(this.config.channelName);
  }

}
