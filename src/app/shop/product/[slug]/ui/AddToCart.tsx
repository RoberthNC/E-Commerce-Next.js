"use client";

import { CartProduct, Product } from "@/interfaces";
import { QuantitySelector, SizeSelector } from "@/components";
import { useState } from "react";
import { useCartStore } from "@/store";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const [size, setSize] = useState<string | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);
  const { inStock } = product;

  const addToCart = () => {
    setPosted(true);
    if (!size) return;
    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };
    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSize(undefined);
  };

  return (
    <>
      {posted && !size && (
        <span className="mt-2 text-red-500 fade-in">
          Please select a valid size
        </span>
      )}
      {/* Sizes selector */}
      <SizeSelector
        selectedSize={size}
        availableSize={product.sizes}
        onSizeChanged={setSize}
      />
      {/* Quantity selector */}
      <QuantitySelector
        quantity={quantity}
        onQuantityChanged={setQuantity}
        maxStock={inStock}
      />
      {/* Button */}
      <button onClick={addToCart} className="btn-primary my-5">
        Add to cart
      </button>
    </>
  );
};
