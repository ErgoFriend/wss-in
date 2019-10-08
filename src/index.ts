export default class Wssin {
  YOUR_CHANNEL_ID: string;
  YOUR_ROOM_ID: string;
  connenction: WebSocket;

  // wss://connect.websocket.in/YOUR_CHANNEL_ID?room_id=YOUR_ROOM_ID
  constructor(YOUR_CHANNEL_ID: string, YOUR_ROOM_ID?: string) {
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
  }
}
