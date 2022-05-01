import { Message, Messages } from "../types/message";

const messageList: Message[] = [
  {
    name: "havana",
    contact: "havana723",
    text: "hellow World!",
    deleted: false,
    date: new Date("2020-07-23"),
  },
  {
    name: "shiftpsh",
    contact: "shiftpsh",
    text: "안녕하세요",
    deleted: false,
    date: new Date("2020-08-06"),
  },
  {
    name: "HYEA",
    contact: "hhyyeeaa",
    text: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
    deleted: false,
    date: new Date("2020-04-03"),
  },
];

export const messages: Messages = {
  messages: messageList,
};
