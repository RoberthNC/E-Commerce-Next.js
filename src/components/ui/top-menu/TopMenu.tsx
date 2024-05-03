"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { titleFont } from "@/config/fonts";
import { usePathname } from "next/navigation";
import { useCartStore, useUIStore } from "@/store";

export const TopMenu = () => {
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const path = usePathname();
  const [loaded, setLoaded] = useState(false);
  const openMenu = useUIStore((state) => state.openSideMenu);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    //TODO: change the condition for fixed menu
    <nav
      className={`flex px-5 justify-between items-center w-full ${
        path === "/shop/empty" ? "fixed left-0 top-0 right-0" : ""
      }`}
    >
      {/* Logo */}
      <div>
        <Link href="/shop">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Center Menú */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:duration-700"
          href="/shop/gender/men"
        >
          Men
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:duration-700"
          href="/shop/gender/women"
        >
          Women
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:duration-700"
          href="/shop/gender/kid"
        >
          Kids
        </Link>
      </div>
      {/* Search - Cart - Menú */}
      <div className="flex items-center gap-3">
        <Link href="/shop/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link
          href={totalItemsInCart === 0 && loaded ? "/shop/empty" : "/shop/cart"}
        >
          <div className="relative">
            {loaded && totalItemsInCart > 0 && (
              <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button
          onClick={() => openMenu()}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:duration-700"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
