const products = [
    {
      id: 1,
      name: 'Multi-color Kaftan',
      href: '#',
      price: '$28',
      imageSrc: '/images/safari3.png',
      imageAlt: 'Kaftan.',
    },
    {
      id: 2,
      name: 'Striped Vintage',
      href: '#',
      price: '$25',
      imageSrc: '/images/vintage2.png',
      imageAlt: 'Kaftan.',
    },
    {
      id: 3,
      name: '2-Piece Patterned Shirt',
      href: '#',
      price: '$29',
      imageSrc: '/images/IMG_4257.PNG',
      imageAlt: 'Shirt.',
    },
    {
      id: 4,
      name: 'Men Native',
      href: '#',
      price: '$35',
      imageSrc: '/images/native3.png',
      imageAlt: 'Native',
    },
    {
        id: 5,
        name: 'Girl Pattern 2-Piece',
        href: '#',
        price: '$35',
        imageSrc: '/images/native5.png',
        imageAlt: '2-piece.',
      },
      {
        id: 6,
        name: 'Golden button Kaftan',
        href: '#',
        price: '$35',
        imageSrc: '/images/safari2.png',
        imageAlt: 'kaftan.',
      },
      {
        id: 7,
        name: '2-Piece mixed colors',
        href: '#',
        price: '$15',
        imageSrc: '/images/IMG_4258.PNG',
        imageAlt: '2piece',
      },
      {
        id: 8,
        name: 'Striped Vintage',
        href: '#',
        price: '$35',
        imageSrc: '/images/vintage5.png',
        imageAlt: 'Vintage',
      },
    
  ]
  
  export default function Category() {
    return (
      <div className="bg-gray-600">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="">Curated Elegance,</span>
            <span className=" text-blue-300 inline-block p-3">Effortless Style</span>
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked collection of artisanal fashion pieces that blend 
            contemporary design with timeless craftsmanship. Each piece tells a story.
          </p>
        </div>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-white">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-400">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  