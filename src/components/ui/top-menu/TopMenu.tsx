"use client";

import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { titleFont } from "@/config/fonts";
import { usePathname } from "next/navigation";

export const TopMenu = () => {
  const path = usePathname();
  return (
    //TODO: change the condition for fixed menu
    <nav
      className={`flex px-5 justify-between items-center w-full ${
        path === "/shop/category/kids" ? "fixed left-0 top-0 right-0" : ""
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
          href="/shop/category/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:duration-700"
          href="/shop/category/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:duration-700"
          href="/shop/category/kids"
        >
          Niños
        </Link>
      </div>
      {/* Search - Cart - Menú */}
      <div className="flex items-center gap-3">
        <Link href="/shop/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/shop/cart">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:duration-700">
          Menú
        </button>
      </div>
    </nav>
  );
};
