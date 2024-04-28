import Image from "next/image";
import Link from "next/link";
import { Title } from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import { QuantitySelector } from "@/components";

const productsInCart = [
  initialData.products[0],
  // initialData.products[1],
  // initialData.products[2],
];

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:p-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verify Order" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cartshop */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Edit your order</span>
            <Link href="/shop/cart" className="underline mb-5">
              Edit your cartshop here
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{ width: "100px", height: "100px" }}
                  alt={product.title}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 1</p>
                  <p className="font-bold">Subtotal: ${product.price * 1}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Checkout Summarize */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Delivery Address</h2>
            <div className="mb-10">
              <p className="text-xl">Roberto Núñez</p>
              <p>Urb. Unión 232</p>
              <p>Aranjuez</p>
              <p>Trujillo City</p>
              <p>CP: 13001</p>
              <p>13001.13001.13001</p>
            </div>
            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />
            <h2 className="text-2xl mb-2">Order Summarize</h2>
            <div className="grid grid-cols-2">
              <span>N° Products</span>
              <span className="text-right">3 items</span>
              <span>Subtotal</span>
              <span className="text-right">$ 100</span>
              <span>Taxation</span>
              <span className="text-right">$ 100</span>
              <span className="text-2xl mt-5">Total</span>
              <span className="text-2xl mt-5 text-right">$ 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  If you click in "Go to Order", you're accepting our{" "}
                  <span className="underline hover:cursor-pointer">
                    terms and conditions
                  </span>{" "}
                  and{" "}
                  <span className="underline hover:cursor-pointer">
                    privacity policies
                  </span>
                </span>
              </p>
              <Link
                className="flex btn-primary justify-center"
                href="/shop/orders/123"
              >
                Go to Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
