import type { PortableTextBlock, ImageAsset } from "@sanity/types";

export interface Page {
  _id: string;
  _type: "document";
  _createdAt: string;
  title?: string;
  heroImage?: ImageAsset;
  heroText?: string;
  HeroFlipText?: string[];
  body: PortableTextBlock[];
}

export interface FrontPage extends Page {  
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