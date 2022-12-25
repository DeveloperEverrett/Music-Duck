import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { logo2 } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({handleClick}) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400" key={item.name} to={item.to} onClick={() => handleClick && handleClick()} >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-20 px-4 bg-[#3d1e5a] bg-opacity-90 backdrop-blur-lg ">
        <img
          src={logo2}
          alt="logo"
          className="w-full h-50 object-contain animate-slideup "
        />
        <NavLinks />
      </div>
    </>
  );
};

export default Sidebar;
