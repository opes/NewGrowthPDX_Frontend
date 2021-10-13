import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { useUser } from '../hooks/UserProvider.js';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleLogout = async () => {
    const res = await fetch('https://ngpdx-backend.herokuapp.com/auth/logout', {
      method: 'GET',
      credentials: 'include',

      mode: 'cors'
    });

    const json = await res.json();
    console.log(json);
    setUser(null);
    return history.push('/');
  };

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
                  {user && (
                    <Link
                      to={'/greenhouse'}
                      className="border-green-600 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      My Greenhouse
                    </Link>
                  )}

                  <Link
                    to={'/plant'}
                    className="border-green-600 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    About
                  </Link>
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
                {user ? (
                  <>
                    <span>{user.username}</span>

                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
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
                    {user?.username ?? 'please login'}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user?.email ?? 'please login'}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link
                  to="/"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800"
                >
                  Home
                </Link>
                <Link
                  to="/greenhouse"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  My Greenhouse
                </Link>
                <div
                  onClick={handleLogout}
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
