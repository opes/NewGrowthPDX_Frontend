import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MailIcon } from '@heroicons/react/solid';
import { useUser } from '../hooks/UserProvider.js';

export default function PlantBuyerDetail() {
  const { user } = useUser();
  const [plants, setPlants] = useState({});
  const { id } = useParams();
  const [mailPreview, setMailPreview] = useState('');

  useEffect(() => {
    const fetchPlantDetail = async (plantID) => {
      const res = await fetch(
        `https://ngpdx-backend.herokuapp.com/api/v1/plants/${plantID}`
      );
      const json = await res.json();
      console.log(json, 'HERE I AM - plant detail');

      setPlants(json);
    };
    fetchPlantDetail(id);
  }, []);


  const sendEmail = async (plantId, email) => {
    try {
      const res = await fetch(
        'https://ngpdx-backend.herokuapp.com/api/v1/mailer',
        {
          method: 'POST',
          credentials: 'include',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            plantId: plantId,
            fromEmail: email
          })
      });
      const json = await res.json();
      return json;

    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEmail = async () => {
    const res = await sendEmail(id , user.email)

    setMailPreview(res.mailPreview);
    window.open(res.mailPreview)

    if(res.mailPreview) return alert("Email sent!")
    else return alert("Email did not correctly send")
  }


  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg lg:self-end">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {plants.plant_name}
            </h1>
          </div>

          <section aria-label="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Plant information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                ${plants.price}
              </p>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{plants.description}</p>
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
      <div className="ml-60">
        <button
          type="button"
          onClick={() => {handleEmail()}}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <MailIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Email User
        </button>
        <Link to={'/'} className="text-gray-900 px-4">
          Go Back
        </Link>
      </div>
    </div>
  );
}
