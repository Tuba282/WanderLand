
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "/lib/utils";


export const NavbarDemo = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

export const Navbar = ({ className }) => {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed hidden sm:block top-10 inset-x-0 max-w-md mx-auto z-50 font-[Quicksand]", className)}>
      <Menu setActive={setActive} >
        <MenuItem setActive={setActive} active={active} item="Home" >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/home">Home</HoveredLink>
            <HoveredLink to="/about">About</HoveredLink>
            <HoveredLink to="/contact">Get In Touch</HoveredLink>
            <HoveredLink to="/blogs">Blogs</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Destination">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Features"
              href="/blogs#features"
              src="/Blogs.png"
              description="Prepare for tech interviews like never before." />
            <ProductItem
              title="Gallery"
              href="/home#Gallery"
              src="/Gallery.png"
              description="Exploration and discovering the wonders that the world has offer." />
            <ProductItem
              title="Get In Touch"
              href="/contact"
              src="/GetInTouch.png"
              description="Our expert team curates personalized adventures for every traveler." />
            <ProductItem
              title="Memories"
              href="/about#joinUs"
              src="/Memories.png"
              description="Whether you dream of pristine beaches, majestic mountains, or vibrant cities" />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
