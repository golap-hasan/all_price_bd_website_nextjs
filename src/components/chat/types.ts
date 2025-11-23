export type Conversation = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastTime: string;
  unread?: number;
};

export type Message = {
  id: string;
  fromMe: boolean;
  text?: string;
  image?: string;
  time: string;
};

export type AdSummary = {
  title: string;
  price: string;
  image: string;
  location: string;
  posted: string;
  link: string;
};
