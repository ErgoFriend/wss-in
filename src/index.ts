import {ulid} from "ulid";
import newUser, {User} from "user";
import newMessage, {Message} from "message";

export default class Wssin {
  user: User;
  YOUR_CHANNEL_ID: string;
  YOUR_ROOM_ID: string;
  connenction: WebSocket;

  // wss://connect.websocket.in/YOUR_CHANNEL_ID?room_id=YOUR_ROOM_ID
  constructor(name: string, YOUR_CHANNEL_ID: string, YOUR_ROOM_ID?: string) {
    if (0 < name.length) {
      this.user.name = name;
    } else {
      this.user.name = "user-" + ulid().toString();
    }
    if (0 < YOUR_CHANNEL_ID.length) {
      this.YOUR_CHANNEL_ID = YOUR_CHANNEL_ID;
    }
    if (YOUR_ROOM_ID !== undefined && 0 < YOUR_ROOM_ID.length) {
      this.YOUR_ROOM_ID = YOUR_ROOM_ID;
    }

    this.connenction = new WebSocket(
      "wss://connect.websocket.in/" +
        YOUR_CHANNEL_ID +
        "?room_id=" +
        YOUR_ROOM_ID
    );

    const user = this.joinUser(name);
    this.user = user;
  }

  joinUser(name: string): User {
    const self = newUser(name, null);
    this.send("joinUser", JSON.stringify(self));
    return self;
  }

  updateUser(name: string, content: any): User {
    this.user.name = 0 < name.length ? name : this.user.name;
    this.user.content = content !== null ? content : this.user.content;
    this.send("updateUser", JSON.stringify(this.user));
    return this.user;
  }

  send(type: string, data: string) {
    const message = newMessage(this.user.ulid, type, data);
    this.connenction.send(JSON.stringify(message));
  }
}
