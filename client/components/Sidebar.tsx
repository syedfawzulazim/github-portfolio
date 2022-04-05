import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDown,
  AiFillHome,
} from "react-icons/ai";
import Link from "next/link";

interface IData {
  id: number;
  bio: string;
  location: string;
  updated_at: string;
}

const Sidebar = () => {
  const [data, setData] = useState<IData>({
    id: 0,
    bio: "",
    location: "",
    updated_at: "",
  });

  const { id, bio, location, updated_at } = data;

  const fetchData = useCallback(async () => {
    const res = await fetch("https://api.github.com/users/syedfawzulazim");
    const data: IData = await res.json();

    const transformedData = {
      id: data.id,
      bio: data.bio,
      location: data.location,
      updated_at: data.updated_at,
    };
    setData(transformedData);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="space-y-4">
      <Image
        src="https://www.sfazim.me/static/media/pp.ef1033d6fb3572d23842.jpg/"
        alt="profile_picture"
        height={290}
        width={210}
        className="mx-auto rounded-full"
      />
      <h3 className="font-medium tracking-wider first-letter:font-extrabold first-letter:text-3xl first-letter:italic first-letter:text-indigo-200">
        <span>Syed F. </span>
        Azim
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-800 rounded-full md:w-6/12 md:mx-auto lg:w-full">
        {bio}
      </p>

      <a
        href="https://cdn.sanity.io/files/g37f342r/production/a2d8f15d1935a64b9cbb55eeb723d190db170a33.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center gap-2 px-2 py-1 my-3 bg-gray-800 rounded-full cursor-pointer lg:w-full md:w-6/12 md:mx-auto"
      >
        <AiOutlineDown className="w-6 h-6" /> Download Resume
      </a>

      <div className="flex justify-around gap-2 p-2 md:w-6/12 md:mx-auto lg:w-6/12">
        <Link href="https://github.com/syedfawzulazim" passHref>
          <a target="_blank" className="cursor-pointer">
            <AiFillGithub className="w-8 h-8" />
          </a>
        </Link>
        <Link
          href="https://www.linkedin.com/in/syed-fawzul-azim-332a92a4/"
          passHref
        >
          <a target="_blank" className="cursor-pointer">
            <AiFillLinkedin className="w-8 h-8" />
          </a>
        </Link>
      </div>
      <div className="space-y-1">
        <AiFillHome className="mx-auto" />
        <div>
          <span>{location}</span>
        </div>
        <p>syed.fawzul.azim@gmail.com</p>
        <p>(+49) 176-8709-9185</p>
        <p>Updataed at: {updated_at.slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default Sidebar;
