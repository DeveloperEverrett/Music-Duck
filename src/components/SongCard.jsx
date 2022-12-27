import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i, activeSong, isPlaying, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(false);
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-gradient-to-tl from-[#ca92f5] to-[#2c245c] animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-[#fc5c7d] bg-opacity-60'
              : 'hidden'
          }`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img
          src={song.images?.coverart}
          alt="sorry...no image"
          className="text-white"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}> {song.title} </Link>
        </p>
        <p className="text-sm truncate text-gray-400 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {' '}
            {song.subtitle}{' '}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
