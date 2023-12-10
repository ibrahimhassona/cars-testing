"use client";

import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface CarDetailesProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
const CarDetailes = ({ isOpen, closeModal, car }: CarDetailesProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-ou duration-300"
            enterFrom="opacity-100"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] bg-white overflow-y-auto transform rounded-2xl text-left shadow-xl transition-all flex flex-col gap-5 p-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-0 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="./close.svg"
                      alt="Close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        fill
                        priority
                        alt="Car Modle"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3 ">
                      <div className="flex-1 w-full h-24 bg-primary-blue-100 relative rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          fill
                          priority
                          alt="Car Modle"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 w-full h-24 bg-primary-blue-100 relative rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          fill
                          priority
                          alt="Car Modle"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 w-full h-24 bg-primary-blue-100 relative rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          fill
                          priority
                          alt="Car Modle"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-bold capitalize">
                        {car.make} {car.model}
                      </h2>
                      <div className="mt-3 flex flex-1 flex-col gap-3">
                        {Object.entries(car).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center"
                          >
                            <h2 className="capitalize">
                              {key.split("_").join(" ")}
                            </h2>
                            <p>{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetailes;
