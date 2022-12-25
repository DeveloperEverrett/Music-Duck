import React from 'react';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

const Discover = () => {
  const genreTitle = 'Rap';

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-between items-center sm:flex-row mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select onChange={() => {}} value="" className="bg-black"></select>
      </div>
    </div>
  );
};

export default Discover;
