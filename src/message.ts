import {ulid} from "ulid";

export type Message = {
  ulid: string;
  user_ulid: string;
  type: string;
  content: string;
  date: string;
};

export default function newMessage(
  user_ulid: string,
  type: string,
  content: string
): Message {
  const message_ulid = ulid();
  const now = Math.floor(new Date().getTime() / 1000);
  const message: Message = {
    ulid: message_ulid,
    user_ulid: user_ulid,
    type: type,
    content: content,
    date: now.toString()
  };

  return message;
}
