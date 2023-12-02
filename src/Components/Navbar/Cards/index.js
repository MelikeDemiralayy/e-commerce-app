import React from 'react';
import Link from 'next/link';

const ProductCards = ({ product }) => {
  if (!product) {
    return <div>Ürün bilgisi bulunamadı.</div>;//Ürün bilgisi bulunamadığı zaman 
  }
  const imageSrc = product.image || 'placeholder_image_url';// ürün remi yoksa 
  const title = product.title || 'Ürün Başlığı Bulunamadı'; //ürün başlığı yoksa
  
  return (
    <div key={product.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {product.image && (
        <img className="p-8 rounded-t-lg" src={imageSrc} alt="product image" />
      )}
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <div className="flex items-center mt-2.5 mb-5">
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>

          <Link href={`/detail/${product.id}`}>
              Learn More
          </Link>


          
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sepete Ekle</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;

