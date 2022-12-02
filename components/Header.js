import React from "react";
import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <header className='flex flex-col justify-between items-center sm:flex-row m-5 h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        {itemsData.map((item, i) => (
          <HeaderItems key={i} title={item.title} Icon={item.Icon} />
        ))}
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="Hulu-icon"
      />
    </header>
  );
};

export default Header;

const itemsData = [
  { title: "HOME", Icon: HomeIcon },
  { title: "TRENDING", Icon: LightningBoltIcon },
  { title: "VERIFIED", Icon: BadgeCheckIcon },
  { title: "COLLECTIONS", Icon: CollectionIcon },
  { title: "SEARCH", Icon: SearchIcon },
  { title: "ACCOUNT", Icon: UserIcon },
];

