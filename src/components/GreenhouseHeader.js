import { PlusIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/UserProvider.js';

const profile = {
  avatar:
    'https://res.cloudinary.com/mountaincloud/image/upload/v1633921006/shot-cropped-1590357847004_s5sqna.png',
  backgroundImage:
    'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
};

export default function GreenhouseHeader() {
  const { user } = useUser();

  return (
    <div>
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={profile.backgroundImage}
          alt=""
        />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={profile.avatar}
              alt=""
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {user.username}
              </h1>
            </div>
            <Link to="/list-plant">
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Add a Plant
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-6 relative z-10 border-t border-b border-gray-200 grid items-center"></div>
      </div>
    </div>
  );
}
