"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useEffect, useState } from "react";

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
    state.getSummaryInfomation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Loading...</p>;
  return (
    <div className="grid grid-cols-2">
      <span>N° Products</span>
      <span className="text-right">
        {itemsInCart === 1 ? "1 Item" : `${itemsInCart} items`}
      </span>
      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>
      <span>Taxation</span>
      <span className="text-right">{currencyFormat(tax)}</span>
      <span className="text-2xl mt-5">Total</span>
      <span className="text-2xl mt-5 text-right">{currencyFormat(total)}</span>
    </div>
  );
};
