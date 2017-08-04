import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PusherService } from '../../app/pusher.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messages: Array<{name: string, message: string}>;

  constructor(public navCtrl: NavController, private pusherService: PusherService) {

    this.messages = [];

    pusherService.messagesChannel.bind(pusherService.eventName, (data) => {
      console.log(data.name, data.message);
      this.messages.push(data);
    });

  }

}
