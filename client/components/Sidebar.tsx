import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDown,
  AiFillHome,
} from "react-icons/ai";

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
  }, []);

  return (
    <div className="space-y-4">
      <Image
        src="https://www.sfazim.me/static/media/pp.ef1033d6fb3572d23842.jpg/"
        alt="profile_picture"
        height={290}
        width={210}
        className="mx-auto rounded-full"
      />
      <h3 className="font-medium tracking-wider first-letter:font-extrabold first-letter:text-xl first-letter:italic first-letter:text-blue-700">
        <span>Syed F. </span>
        Azim
      </h3>
      <p className="px-2 py-1 my-3 bg-red-100 rounded-full md:w-6/12 md:mx-auto lg:w-11/12">
        {bio}
      </p>
      <a className="flex justify-center gap-2 px-2 py-1 my-3 bg-red-100 rounded-full cursor-pointer lg:w-full md:w-6/12 md:mx-auto">
        <AiOutlineDown className="w-6 h-6" /> Download Resume
      </a>
      <div className="flex justify-center gap-2 bg-gray-400 md:w-6/12 md:mx-auto lg:w-10/12">
        <a className="cursor-pointer">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a className="cursor-pointer">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
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
