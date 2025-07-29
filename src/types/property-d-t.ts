import { StaticImageData } from "next/image";
import { JSX } from "react";

// Interface for featured property with details such as title, address, user info, and property features.
export interface IFeaturedPropertyDT {
  id: number;
  title: string;
  address?: string;
  linkUrl?:string;
  image: StaticImageData;
  userImage?: StaticImageData;
  showTags?: boolean;
  isForRent?: boolean;
  isFeatured?: boolean;
  userName?: string;
  userRole?: string;
  bedrooms: string;
  bathrooms: string;
  livingArea: string;
  city?:string,
  state?: string,
  wowAnimation?:boolean;
  wowDelay?:string;
  description?:string;
  spacing?:boolean,
  price: number;
  quantity:number
}

// Interface for neighbourhood properties, including city name, property count, and image.
export interface INeighbourhoodProperty {
  id: number;
  name: string;
  image: StaticImageData;
  count: number;
}

//define interface for property Props
export interface propertyProps {
  columnClass?: boolean;
  showBtn?: boolean;
  textAlign?: string;
  textStart?: string
}
//define interface for property Props
export interface RentMetaItemProps {
  icon: JSX.Element;
  value: string;
  label: string;
}