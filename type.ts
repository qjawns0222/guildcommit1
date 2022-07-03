import { json } from "stream/consumers";

export interface js {
  data: Array<{
    currentform: String;
    idx: string;
    maker: String;
    text: {
      address: String;
      content: String;
      date: String;
      tags: String[];
      time: String;
      title: String;
    };
  }>;
  common: { login: String };
}
export interface da {
  currentform: string;
  idx: string;
  maker: string;
  text: {
    address: string;
    content: string;
    date: string;
    tags: string[] | undefined;
    time: string;
    title: string;
  };
}
