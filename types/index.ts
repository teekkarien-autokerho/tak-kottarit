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
  heroImagePosition?: "top" | "center" | "bottom";
  heroText?: string;
  heroTextColor: "black" | "white" | "red";
  HeroFlipText?: string[];
  body: PortableTextBlock[];
  topics: Topic[];
}

export interface FrontPage extends Omit<Page, "topics"> {  
  heroFlipText?: string[];
  heroImageMobile?: ImageAsset;
  picture?: ImageAsset
  newsPosts: {
    _ref: string;
  }[]
}


export interface ProjectCarListPage {
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

export interface NewsPostLink {
  url?: string;
  page?: {
    _id: string;
    slug: {
      current: string;
    }
  };
  text?: string;
}

export interface NewsPost {
  _id: string;
  _type: "document";
  _createdAt: string;
  title?: string;
  slug: {
    current: string
  };
  body: PortableTextBlock[];
  image: ImageAsset;
  link?: NewsPostLink;
}