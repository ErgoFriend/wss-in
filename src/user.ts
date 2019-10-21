import {ulid} from "ulid";

export type User = {
  ulid: string;
  name: string;
  content: any;
  date: string;
};

export default function newUser(name: string, content: any): User {
  const user_ulid = ulid();
  const now = Math.floor(new Date().getTime() / 1000);
  const user = {
    ulid: user_ulid,
    name: name,
    content: content,
    date: now.toString()
  };
  return user;
}
