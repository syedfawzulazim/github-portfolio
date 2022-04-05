import { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/experience") setActiveItem("Experience");
    if (pathname === "/github") setActiveItem("Github");
  }, []);

  const onClickHandler = (event: MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLElement;

    switch (target.innerText) {
      case "About": {
        setActiveItem("About");
        break;
      }
      case "Experience": {
        setActiveItem("Experience");
        break;
      }
      case "Github": {
        setActiveItem("Github");
        break;
      }
    }
  };

  return (
    <div className="flex justify-between px-5 py-3 my-3 md:px-20 lg:px-5">
      <div>
        <span className="font-mono text-xl font-extrabold text-blue-300 border-b-4 hover:border-blue-300 md:text-2xl">
          {activeItem}
        </span>
      </div>
      <div className="flex space-x-3">
        {activeItem !== "About" && (
          <Link href="/">
            <a>
              <span
                onClick={onClickHandler}
                className="border-b-2 border-gray-500 hover:text-blue-300"
              >
                About
              </span>
            </a>
          </Link>
        )}
        {activeItem !== "Experience" && (
          <Link href="/experience">
            <a>
              <span
                onClick={onClickHandler}
                className="border-b-2 border-gray-500 hover:text-blue-300 hover:border-blue-300"
              >
                Experience
              </span>
            </a>
          </Link>
        )}
        {activeItem !== "Github" && (
          <Link href="/github">
            <a>
              <span
                onClick={onClickHandler}
                className="border-b-2 border-gray-500 hover:text-blue-300 hover:border-blue-300"
              >
                Github
              </span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
