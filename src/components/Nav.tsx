import React, { useState } from "react";
import { Alien, List, X } from "phosphor-react";
import Button from "./Button";
const Nav = () => {
  const [open, setOPen] = useState<boolean>(false);
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0  ">
      <div className="  bg-white py-4 ">
        <div className=" mobile:block  flex  items-center justify-between">
          <span>
            <Alien size={32} weight="thin" />
          </span>

          <div
            onClick={() => setOPen(!open)}
            className="mobile:absolute mobile:top-6 right-8 cursor-pointer  "
          >
            {open ? (
              <X size={32} weight="bold" />
            ) : (
              <List size={32} weight="bold" />
            )}
          </div>
          <ul
            className={` mobile:w-full mobile:bg-white mobile:block flex tablet:absolute  mobile:transition-all mobile:duration-500 mobile:ease-in mobile:z-[-1]  ${
              open ? "top-20" : "top-[-500px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className=" cursor-pointer ml-8 text-xl list-none  mobile:my-7 "
              >
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500   no-underline "
                >
                  {link.name}{" "}
                </a>
              </li>
            ))}
            <Button>Get Started</Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
