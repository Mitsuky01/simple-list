"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductDetail() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<any>(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link href="/">Home</Link> | <Link href="/contact">Contact</Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="h-60 mb-4" />
      <p>{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
      <button onClick={() => setFavorite(!favorite)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        {favorite ? 'Remove from Favorite' : 'Add to Favorite'}
      </button>
    </div>
  );
}