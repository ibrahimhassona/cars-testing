import { fetchCars } from "@/utils";
import { CarCard, Hero, SearchBar, CustomFilter, ShowMore } from "./components";

import { fuels, yearsOfProduction } from "@/constants/constants";
import { FilterProps } from "@/types";

export default async function Home({searchParams}:{searchParams:FilterProps}){

  const cars = await fetchCars({
    model: searchParams.model || "",
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2019,
    limit: searchParams.limit || 10,
    fuel: searchParams.fuel || "",
  });
  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
  return (
    <main className="overflow-hidden ">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Expolore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuels" options={fuels} />
            <CustomFilter title="years" options={yearsOfProduction} />
          </div>
        </div>
        {/* The part that show the cards in it */}
        {!isDataEmpty ? (
          <section id="cars">
            <div className="home__cars-wrapper">
              {cars.map((car) => (
                <CarCard car={car} key={car.model}/>
              ))}
            </div>
            <ShowMore
              limit={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        ) : (
          <div>Error</div>
        )}
      </div>
    </main>
  );
}
