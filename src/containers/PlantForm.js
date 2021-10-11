import { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PlantForm() {
  const [enabled, setEnabled] = useState(false);
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  const uploadImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'zbeywvhn');
    data.append('cloud_name', 'mountaincloud');
    fetch('https://api.cloudinary.com/v1_1/mountaincloud/image/upload', {
      method: 'post',
      body: data
    })
      .then(resp => resp.json())
      .then(data => {
        setUrl(data.url);
      })
      .catch(err => console.log(err));
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h2 className="text-xl leading-6 font-medium text-gray-900">
              Add a plant
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <Switch.Group as="div" className="flex items-center">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                  enabled ? 'bg-green-600' : 'bg-gray-200',
                  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                )}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                  )}
                />
              </Switch>
              <Switch.Label as="span" className="ml-3">
                <span className="text-sm font-medium text-gray-800">
                  Market
                </span>
              </Switch.Label>
            </Switch.Group>

            <div className="sm:col-span-6">
              <label
                htmlFor="plant-offer"
                className="block text-sm font-medium text-gray-700"
              >
                Add a photo of your plant
              </label>

              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                {url ? (
                  <>
                    <img src={url} alt={'plant'} />
                    <input type="hidden" value={url} name="img-url" />
                  </>
                ) : (
                  <>
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            onChange={event => setImage(event.target.files[0])}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                      <button
                        type="button"
                        onClick={uploadImage}
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Upload
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Plant Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Scientific Name{' '}
                <span className="mt-2 text-sm text-gray-500">(optional)</span>
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few sentences about the plant.
              </p>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                defaultValue="Fern"
              >
                <option>Fern</option>
                <option>Cacti</option>
                <option>Air</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
