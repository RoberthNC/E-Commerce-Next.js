import Link from "next/link";
import { Title } from "@/components/ui/title/Title";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:p-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Cartshop" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cartshop */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Add more items</span>
            <Link href="/shop" className="underline mb-5">
              Continue Shopping
            </Link>
            {/* Items */}
            <ProductsInCart />
          </div>
          {/* Checkout Summarize */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Order Summarize</h2>
            <OrderSummary />
            <div className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-primary justify-center"
                href="/shop/checkout/address"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
