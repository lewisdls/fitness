import React from "react";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

export const Product_Card = ({ product }: { product: Product }) => {
  return (
    <div className="md:w-auto text-center shadow rounded-md">
      <div className="w-full h-[400px] md:h-[300px] relative">
        <img
          src={product.image}
          alt=""
          className="w-full h-full object-cover rounded-t-md"
        />
        <span className="absolute top-0 left-0 text-yellow-400 bg-white px-2 py-1 m-4 rounded-md font-medium text-sm">
          NEW
        </span>
      </div>
      <div className="space-y-2 bg-gray-100 p-4 rounded-b-md">
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <p className="text-gray-600">
          $
          {product.price.toString().includes(".")
            ? product.price
            : product.price + ".00"}
        </p>
      </div>
    </div>
  );
};
