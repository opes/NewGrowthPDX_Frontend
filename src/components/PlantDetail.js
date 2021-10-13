import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

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

  console.log(plants, '-------')

  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                <Tab
                  key={plants.id}
                  className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                >
                  {({ selected }) => (
                    <>
                      <span className="sr-only">{plants.plant_name}</span>
                      <span className="absolute inset-0 rounded-md overflow-hidden">
                        <img
                          src={plants.image}
                          alt={plants.name}
                          className="w-full h-full object-center object-cover"
                        />
                      </span>
                      <span
                        className={classNames(
                          selected ? 'ring-green-500' : 'ring-transparent',
                          'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>

              </Tab.List>
            </div>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {plants.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{plants.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="text-base text-gray-700 space-y-6"
                dangerouslySetInnerHTML={{ __html: plants.description }}
              />
            </div>

            <form className="mt-6">
              <div className="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500 sm:w-full"
                >
                  Trade
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
