import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/UserProvider.js';

export default function GreenhouseList() {
  const [plants, setPlants] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchUserPlants = async () => {
      try {
        const res = await fetch(
          `https://ngpdx-backend.herokuapp.com/api/v1/greenhouse/${user.id}`
        );
        const json = await res.json();
        if (!json.length) return;
        setPlants(json);
      } catch (error) {
        setPlants([]);
      }
    };
    fetchUserPlants();
  }, [user.id]);

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

                <p className="mb-2 font-medium text-gray-900">${plant.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
