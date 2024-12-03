import { StaticImageData } from "next/image";

export interface Seminar {
  title: string;
  description: string;
  date: Date;
  location: string;
}

export interface Professor {
  firstName: string;
  lastName: string;
  title: string;
  titleSuffix?: string;
  image?: StaticImageData | string;
}