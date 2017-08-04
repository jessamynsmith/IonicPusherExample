import { Injectable } from '@angular/core';

import * as Pusher from "pusher-js";


@Injectable()
export class PusherService {
  pusher: any;
  messagesChannel: any;

  constructor() {
    this.initializePusher();
  }

  initializePusher(): void {
    this.pusher = new Pusher('<pusher-key-here>', {
          cluster: 'us2',
          encrypted: true
      });

    this.messagesChannel = this.pusher.subscribe('my-channel');
  }
}
