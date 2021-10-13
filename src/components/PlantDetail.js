import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PlantDetail() {
  const [plants, setPlants] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPlantDetail = async plantID => {
      const res = await fetch(
        `https://ngpdx-backend.herokuapp.com/api/v1/plants/${plantID}`
      );
      const json = await res.json();
      console.log(json, 'HERE I AM - plant detail');

      setPlants(json);
    };
    fetchPlantDetail(id);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {plants.plant_name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Plant information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                ${plants.price}
              </p>
            </div>

            <div className="mt-4 space-y-6">
              {/* <p className="text-base text-gray-500">{plants.description}</p> */}
            </div>
          </section>
        </div>

        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={plants.image}
              alt={plants.plant_name}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
