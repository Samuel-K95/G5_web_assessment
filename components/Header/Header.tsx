"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type route = {
  name: string;
  route: string;
};

const header_routes: route[] = [
  {
    name: "Home",
    route: "/home",
  },
  {
    name: "Teams",
    route: "/teams",
  },
  {
    name: "Success Stories",
    route: "/success_stories",
  },
  {
    name: "About Us",
    route: "/about_us",
  },
  {
    name: "Blogs",
    route: "/blogs",
  },
  {
    name: "Get Involved",
    route: "/get_involved",
  },
];

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex justify-between items-center px-8 py-5">
      <div>
        <Image
          src={"assets/header/logo.svg"}
          width={100}
          height={100}
          alt="A2SV logo"
        />
      </div>
      <div className="flex flex-row justify-evenly w-[50%] font-normal text-md">
        {header_routes.map((route, index) => (
          <Link href={route.route} key={index}>
            {pathname == route.route ? (
              <>
                <div className="text-[#264FAD] font-semibold">{route.name}</div>
                <div className="w-full h-1 rounded bg-[#264FAD]"></div>
              </>
            ) : (
              <div className="text-[#565656] font-semibold">{route.name}</div>
            )}
          </Link>
        ))}
      </div>
      <div className="flex gap-6 items-center w-[10%] text-md">
        <div className="font-bold">Login</div>
        <button className="bg-[#264FAD] rounded-md text-white p-2 px-5 font-semibold">
          Donate
        </button>
      </div>
    </header>
  );
};

export default Header;
