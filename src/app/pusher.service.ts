import { Injectable } from '@angular/core';

import * as Pusher from "pusher-js";


@Injectable()
export class PusherService {
  pusher: any;
  messagesChannel: any;
  appKey: String;
  cluster: String;
  channelName: String;
  eventName: String;

  constructor() {
    this.appKey = '<PUSHER-APP-KEY>';
    this.cluster = 'us2';
    this.channelName = 'my-channel';
    this.eventName = 'my-event';
    this.initializePusher();
  }

  initializePusher(): void {
    this.pusher = new Pusher(this.appKey, {
          cluster: this.cluster,
          encrypted: true
      });

    this.messagesChannel = this.pusher.subscribe(this.channelName);
  }
}
