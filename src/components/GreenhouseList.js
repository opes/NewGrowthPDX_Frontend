import { MailIcon } from '@heroicons/react/solid';

const products = [
  {
    id: 1,
    name: 'Philodendron Brasil',
    price: '$149',
    imageSrc:
      'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_philodendron-brasil_alt_charcoal-e1625250511641.jpg?ver=279272',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 2,
    name: 'Calathea Freddie',
    price: '$15',
    imageSrc:
      'https://bloomscape.com/wp-content/uploads/2019/04/bloomscape_calathea-freddie_charcoal_0621-scaled-e1625249277720-324x390.jpg?ver=542410',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 3,
    name: 'Parlor Palm',
    price: '$15',
    imageSrc:
      'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_parlor-palmloomscape_slate-e1625249746437.jpg?ver=279264',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 4,
    name: 'Birds Fest Fern',
    price: '$15',
    imageSrc:
      'https://bloomscape.com/wp-content/uploads/2019/04/bloomscape_birds-nest-fern-1_slate_0621-scaled-e1625249318933.jpg?ver=542394',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 1,
    name: 'ZZ Plant',
    price: '$149',
    imageSrc:
      'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_zz-plant_charcoal-e1625251444532.jpg?ver=279472',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 2,
    name: 'Sansevieria',
    price: '$15',
    imageSrc:
      'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_sansevieria_charcoal-e1633460982733.jpg?ver=279439',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 3,
    name: 'Kimberly Queen Fern',
    price: '$15',
    imageSrc:
      'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_kimberly-queen-fern_slate.jpg?ver=279243',
    imageAlt: 'TODO',
    href: '#'
  },
  {
    id: 4,
    name: 'Stromanthe Peacock',
    price: '$15',
    imageSrc:
      'https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_stromanthe-peacock_slate-e1625250822910-324x388.jpg?ver=279342',
    imageAlt: 'TODO',
    href: '#'
  }
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function GreenhouseList() {
  return (
    <div>
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <div
              key={product.id}
              className="group relative p-4 border-r border-b border-gray-200 sm:p-6"
            >
              <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-2 pb-2 text-center">
                <h3 className="py-2 text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>

                {/* <p className="mt-4 text-base font-medium text-gray-900">{product.price}</p> */}
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
