"use client";

import { useEffect, useState } from "react";
import { Product, Product_Card } from "./product_card";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-neutral-50 text-center space-y-12 pt-10 px-4 md:px-0">
      <div className="flex flex-col items-center gap-4">
        <h1 className="uppercase text-4xl font-bold">
          <span className="text-yellow-400">GATESHAPE</span> PRODUCTS
        </h1>
        <p className="md:w-2/5 leading-loose">
          Gym classes dolor sit amet, consectetur adipiscing elit, sed do eiod
          tempor didunt ut labore et dolore m et dolore magna aliqua minim niam
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center md:px-28 gap-8">
        {products.map((product) => (
          <Product_Card key={product.id} product={product} />
        ))}
      </div>
      <button className="border-[2px] border-yellow-400 px-6 py-4 mt-4 rounded-full font-bold">
        VIEW ALL
      </button>
    </div>
  );
};
