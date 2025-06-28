"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main className="p-4">
      <nav className="mb-4">
        <Link href="/">Home</Link> | <Link href="/contact">Contact</Link>
      </nav>
      <h1 className="text-2xl font-bold mb-4">Product Showcase</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-2 rounded shadow">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <Link href={`/products/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
}