import { filter } from 'rxjs';
import WebSocket from 'ws'; //if using in Node.js
import tauClient from 'tau-js-client';
const { getTauMessages, TauChatMessage } = tauClient;

const config = {
  domain: '<your TAU server domain (without protocol)>',
  port: '<your TAU server port (probably 443 if https)>',
  token: '<your TAU server token>',
  messages: true,
  events: true,
  WebSocketCtor: WebSocket,
};

const client = getTauMessages(config);
const chatMessages = client
  .pipe(filter((x) => x instanceof TauChatMessage))
  .subscribe((x) => console.log(`${x.tags.displayName}: ${x.messageText}`));
