import type { PortableTextBlock, ImageAsset, FileAsset } from "@sanity/types";

export type File = FileAsset & {
  url?: string;
  originalFilename?: string;
}

export type Topic = {
  title: string;
  image?: ImageAsset;
  body: PortableTextBlock[];
  files: File[];
}

export interface Page {
  _id: string;
  _type: "document";
  _createdAt: string;
  title?: string;
  heroImage?: ImageAsset;
  heroText?: string;
  HeroFlipText?: string[];
  body: PortableTextBlock[];
  topics: Topic[];
}

export interface FrontPage extends Omit<Page, "topics"> {  
  HeroFlipText?: string[]; 
}

export interface ProjectCarList {
  title?: string;
  heroText?: string;
  intro: PortableTextBlock[];
  outro: PortableTextBlock[];
}

export type ImageWithText = {
  photo: ImageAsset;
  photoText: string;
};

export interface ProjectCar {
  _id: string;
  _type: "document";
  _createdAt: string;
  slug: {
    current: string
  };
  title?: string;
  heroImage?: ImageAsset;
  heroText?: string;
  owner?: string;
  make?: string;
  model?: string;
  year?: number;
  projectStarted?: string;
  engine?: string;
  body: PortableTextBlock[];
  photos: ImageWithText[];
}