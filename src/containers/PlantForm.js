import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PlantForm() {
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  // const [loggedUser, setLoggedUser] = useState('');

  const [plantName, setPlantName] = useState('');
  const [plantSciName, setPlantSciName] = useState('');
  const [plantDescription, setPlantDescription] = useState('');
  const [plantPrice, setPlantPrice] = useState('');
  const [plantCategory, setPlantCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tropical');

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

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        'https://ngpdx-backend.herokuapp.com/api/v1/categories'
      );
      const json = await res.json();

      console.log('****LOOK HERE FOR CATEGORIES*****', json);
      setPlantCategory(json);
    };
    fetchCategories();
  }, []);

  const handlePlantNameChange = event => {
    setPlantName(event.target.value);
  };

  const handleSciNameChange = event => {
    setPlantSciName(event.target.value);
  };

  const handlePlantDescriptionChange = event => {
    setPlantDescription(event.target.value);
  };

  const handlePlantPriceChange = event => {
    setPlantPrice(event.target.value);
  };

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handlePlantSubmission = async () => {
    try {
      // const formData = new FormData()
      // formData.append('plant-name', plantName)
      // formData.append('scientific-name', plantSciName)
      // formData.append('description', plantDescription)
      // formData.append('price', plantPrice)
      // formData.append('category', selectedCategory)
      // formData.append('file-upload', url)

      await fetch('https://ngpdx-backend.herokuapp.com/api/v1/plants', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type':'application/jSON' },
        body: JSON.stringify({
          plant_name: plantName,
          scientific_name: plantSciName,
          description: plantDescription,
          price: plantPrice,
          category_id: 5,
          image: url,
          user_id: '2',
         })
        // formData,
      })

      return alert('it worked!')

    } catch(error) {
      console.log(error)
    }
  };

  return (
    <form
      onSubmit={handlePlantSubmission}
      className="space-y-8 divide-y divide-gray-200"
    >
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
                    <img src={url} alt={'this is a plant'} />
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
                htmlFor="plant-name"
                className="block text-sm font-medium text-gray-700"
              >
                Plant Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={handlePlantNameChange}
                  value={plantName}
                  type="text"
                  name="plant-name"
                  id="plant-name"
                  className="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="scientific-name"
                className="block text-sm font-medium text-gray-700"
              >
                Scientific Name
                <span className="mt-2 text-sm text-gray-500">(optional)</span>
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={handleSciNameChange}
                  value={plantSciName}
                  type="text"
                  name="scientific-name"
                  id="scientific-name"
                  className="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  onChange={handlePlantDescriptionChange}
                  value={plantDescription}
                  id="description"
                  name="description"
                  rows={3}
                  className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Write a few sentences about the plant.
              </p>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price ($USD)
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  onChange={handlePlantPriceChange}
                  value={plantPrice}
                  type="number"
                  min="0.00"
                  name="price"
                  id="price"
                  className="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                onChange={handleCategoryChange}
                value={selectedCategory}
                multiple={false}
                id="category"
                name="category"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
              >
                {plantCategory.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <Link to="/greenhouse">
          <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Cancel
              </button>
            </div>
          </Link>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
