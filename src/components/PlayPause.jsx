import { TiMediaPause, TiMediaPlay } from 'react-icons/ti';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <TiMediaPause size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <TiMediaPlay
      size={45}
      className="text-gray-300 flex center"
      onClick={handlePlay}
    />
  );

export default PlayPause;
