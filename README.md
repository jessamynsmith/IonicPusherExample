# IonicPusherExample

Example of receiving push events from Pusher in an Ionic2 app

### Getting started

1. Get project from GitHub
```bash
$ git clone https://github.com/jessamynsmith/IonicPusherExample.git
```

1. Install dependencies
```bash
$ cd IonicPusherExample
$ npm install
```

1. Create a Pusher account (if you don't already have one) and follow the instructions to create a new app. Once you have the app key, edit src/config.ts to have the pusher app key. You may need to edit cluster, channel name, and event name, as well.

1. Run the app
```bash
$ ionic serve
```

1. Send a notification from Pusher. You should see it in your app.
