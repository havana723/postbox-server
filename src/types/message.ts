export interface Message {
  name: string;
  contact: string;
  text: string;
  deleted: boolean;
  date: Date;
}

export interface Messages {
  messages: Message[];
}
