import Link from 'next/link';

const DetailCard = ({ product }) => {
  if (!product) {
    return <div>Ürün detayı bulunamadı.</div>;
  }

  return (
    <div>
      <Link href={`/Detail/${product.id}`}>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={product.image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">{product.price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DetailCard;
