"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Enternal component
const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

// the SearchBar component
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter()
  // this func make on update the fetch function data
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (model.trim() === "" && manufacturer.trim() === "") {
      alert("Please fill in the search bar !");
    }
    updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

        if (model) {
          searchParams.set("model", model);
        } else {
          searchParams.delete("model", model);
        }

        if (manufacturer) {
          searchParams.set("manufacturer", manufacturer);
        } else {
          searchParams.delete("manufacturer", manufacturer);
        }
    const newPathName = `${window.location.pathname}?${searchParams}`

    router.push(newPathName)
        
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="model"
          name="model"
          value={model}
          className="searchbar__input"
          placeholder="Tiguan"
          onChange={(e) => setModel(e.target.value)} // usage
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
