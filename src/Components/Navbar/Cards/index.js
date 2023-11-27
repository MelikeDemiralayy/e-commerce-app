import React from 'react'

const ProductCards = ({ product }) => {
   // product nesnesinin tanımsız (undefined) olup olmadığını kontrol et
  if (!product) {
    // Varsayılan bir değer veya hata durumunu ele alabilirsiniz
    return <div>Ürün bilgisi bulunamadı.</div>;
  }

  // product nesnesi tanımsız değilse, image özelliğine güvenli bir şekilde erişin
  const imageSrc = product.image || 'placeholder_image_url';

  // product.title'nin tanımsız olup olmadığını kontrol et
  const title = product.title || 'Ürün Başlığı Bulunamadı'; // Varsayılan bir başlık

    return (
      <div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="p-8 rounded-t-lg" src={product.image} alt="product image" />
  
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
  
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
  
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProductCards;
