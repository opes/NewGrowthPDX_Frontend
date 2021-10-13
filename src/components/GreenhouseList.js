import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MailIcon } from '@heroicons/react/solid';


export default function GreenhouseList({ loggedUser }) {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchUserPlants = async () => {
      const res = await fetch(
        `https://ngpdx-backend.herokuapp.com/api/v1/greenhouse/${loggedUser}`
      );
      const json = await res.json();
      if (!json.length) return;
      setPlants(json);
    };
    fetchUserPlants();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Greenhouse Plants</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {plants.map(plant => (
            <div
              key={plant.id}
              className="group relative p-4 border-r border-b border-gray-200 sm:p-6"
            >
              <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={plant.image}
                  alt={plant.plant_name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-2 pb-2 text-center">
                <h3 className="py-1 text-sm font-medium text-gray-900">
                  <Link to={`/plant/${plant.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {plant.plant_name}
                  </Link>
                </h3>

                <p className="mb-2 font-medium text-gray-900">{plant.price}</p>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <MailIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Trade
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
