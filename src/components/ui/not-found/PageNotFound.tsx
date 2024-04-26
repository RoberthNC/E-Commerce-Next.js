import Image from "next/image";
import Link from "next/link";
import { titleFont } from "@/config/fonts";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">
          Whoops! Something wrong ocurred.
        </p>
        <p className="font-light">
          <span>You can get back </span>
          <Link
            className="font-normal hover:underline transition-all"
            href="/shop"
          >
            Home
          </Link>
        </p>
      </div>

      <div className="px-5 my-5">
        <Image
          className="p-5 sm:p-0"
          alt="Starman"
          src="/imgs/starman_750x750.png"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};