import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyle?:string;
  rightIcon?:string;
  isDisabled?:boolean;
}

export interface SearchmanufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps{
  model:string;
  manufacturer:string;
  limit:number;
  fuel:string;
  year:number;
}

export interface CustomOptions{
  title:string;
  value:string;
}

export interface CustomFilterProps{
  title:string;
  options:CustomOptions[];
}
export interface ShowMoreProps{
  limit : number;
  isNext : boolean;
}
