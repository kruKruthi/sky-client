import { useEffect, useState } from 'react';
import { useProduct } from '../../../graphql/hooks';
import { useParams } from 'react-router-dom';

export default function ProductDetailsPage() {
  const { id } = useParams<{ id?: string }>();
  const { loading, error, product } = useProduct(id ?? "");

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setActiveImage(product.images[0].url);
    }
  }, [product]);

  if (loading) {
    return <h1>Loading product details...</h1>;
  }

  if (error || !product) {
    return <h1>Error loading product details...</h1>;
  }

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'specs', label: 'Specifications' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <>
    <div className='max-w-7xl mx-auto px-4 py-10'>
      {/* Product main section */}
      <div className='flex flex-col md:flex-row gap-10'>
        {/* Left: Image Gallery */}
        <div className='w-full md:w-1/2 flex flex-col items-center'>
          <div className='w-full border rounded-2xl overflow-hidden'>
            {activeImage ? (
              <img src={activeImage} alt={product.title} className='w-full h-[400px] object-contain bg-gray-50' />
            ) : null}
          </div>

          {/* Thumbnails (only if multiple images) */}
          {product.images && product.images.length > 1 && (
            <div className='flex gap-3 mt-4 flex-wrap justify-center'>
              {product.images.map((img: { url: string; altText?: string }, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img.url)}
                  className={`border rounded-lg p-1 transition ${
                    activeImage === img.url ? 'border-blue-500' : 'border-gray-300'
                  }`}>
                  <img src={img.url} alt={img.altText || 'Thumbnail'} className='w-16 h-16 object-contain' />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className='w-full md:w-1/2 space-y-5'>
          <h1 className='text-2xl md:text-3xl font-semibold'>{product.title}</h1>
          <p className='text-gray-700 leading-relaxed'>{product.description}</p>

          <p className='text-sm text-gray-500'>Added on: {product.createdAt}</p>

          <button className='px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition'>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className='mt-12'>
        {/* Tabs Header */}
        <div className='flex flex-wrap gap-4 border-b border-gray-200'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'description' | 'specs' | 'reviews')}
              className={`pb-2 px-4 text-sm md:text-base font-medium border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-blue-500'
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className='mt-6 text-gray-700'>
          {activeTab === 'description' && (
            <p>
              {product.description}
            </p>
          )}
          {activeTab === 'specs' && (
            <ul className='list-disc pl-6 space-y-2'>
              <li>Bluetooth 5.2</li>
              <li>Battery life: 30 hours</li>
              <li>Charging time: 1.5 hours</li>
              <li>Noise cancellation: Yes</li>
            </ul>
          )}
          {activeTab === 'reviews' && (
            <div className='space-y-4'>
              {/* {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review: { id: string; content: string; date: string; user: { username: string } }) => (
                  <div key={review.id} className='border-b pb-3'>
                    <p className='font-medium'>{review.content}</p>
                    <div className='text-xs text-gray-500 mt-1'>
                      By {review.user.username} on {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )} */}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
    
  );
}
