import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10 gap-3">
      <Link href="/shop">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo
        </span>
        <span> | Shop</span>
        <span>© {new Date().getFullYear()}</span>
      </Link>
      <Link href="/shop">Privacy & Legal</Link>
      <Link href="/shop">Locations</Link>
    </div>
  );
};
