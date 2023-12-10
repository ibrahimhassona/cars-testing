"use client";

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { CarDetailes, CustomButton } from ".";
import {useState} from 'react'
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make}
          {car.model}
        </h2>
      </div>
      <p className="flex font-extrabold mt-6 text-[32px]">
        <span className="text-sm self-start font-medium">$</span>
        {carRent}
        <span className="text-sm self-end font-medium">/mon</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          priority
          alt="Car Modle"
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className=" flex justify-center items-center flex-col gap-2">
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel'/>
            <p>{car.transmission === 'a' ? 'Automatic':'Manual'}</p>
          </div>
          <div className=" flex justify-center items-center flex-col gap-2">
            <Image src='/tire.svg' width={20} height={20} alt='tire'/>
            <p>{car.drive.toUpperCase()}</p>
          </div>
          <div className=" flex justify-center items-center flex-col gap-2">
            <Image src='/gas.svg' width={20} height={20} alt='gas'/>
            <p className="text-sm">{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
        <CustomButton
            title="View More Info"
            containerStyles="w-full bg-primary-blue py-[16px] rounded-full"
            textStyle="text-white text-sm leading-[14px font-bold]"
            rightIcon="/right-arrow.svg"
            handleClick={()=>setIsOpen(true)}
        />
        </div>
        <CarDetailes isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} />
      </div>
    </div>
  );
};

export default CarCard;
