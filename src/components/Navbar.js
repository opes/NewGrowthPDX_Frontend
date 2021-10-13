import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <Link to={'/'}>
                    <span className="sr-only">New Growth PDX</span>
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://res.cloudinary.com/mountaincloud/image/upload/v1633481874/New_Project_1_cfievf.png"
                      alt="New Growth PDX"
                    />
                  </Link>
                  <Link to={'/'}>
                    <span className="sr-only">New Growth PDX</span>
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://res.cloudinary.com/mountaincloud/image/upload/v1633481874/New_Project_1_cfievf.png"
                      alt="New Growth PDX"
                    />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <Link
                    to={'/'}
                    className="border-green-600 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    New Growth PDX
                  </Link>
                  <Link
                    to={'/greenhouse'}
                    className="border-green-600 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    My Greenhouse
                  </Link>
                  <Link
                    to={'/plant'}
                    className="border-green-600 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    About
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <div className="flex-shrink-0">
                  <Link to={'/signup'} className="text-gray-900">
                    Sign Up
                  </Link>
                </div>
                <div className="flex-shrink-0">
                  <Link to={'/login'} className="text-gray-900 px-4">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="bg-green-50 border-green-600 text-green-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Categories
              </a>
              <a
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contact
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://res.cloudinary.com/mountaincloud/image/upload/v1633535584/Screen_Shot_2021-10-06_at_8.52.57_AM_i2w5fl.png"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Test User
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    testuser@gmail.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Greenhouse
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
