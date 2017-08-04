import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PusherProvider } from '../../providers/pusher/pusher';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messages: Array<{name: string, message: string}>;

  constructor(public navCtrl: NavController, private pusher: PusherProvider) {

    this.messages = [];

    pusher.messagesChannel.bind(pusher.config.eventName, (data) => {
      console.log(data.name, data.message);
      this.messages.push(data);
    });

  }

}
