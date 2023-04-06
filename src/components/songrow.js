import React from 'react';
import EditSongModal from './editsongmodal';

const SongRow = ({ props, song, setSongs, onDelete }) => {

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{song.title}</td>
      <td className="px-6 py-4 whitespace-nowrap">{song.artist}</td>
      <td className="px-6 py-4 whitespace-nowrap">{song.album}</td>
      <td className="px-6 py-4 whitespace-nowrap">{song.genre}</td>
      <td className="px-6 py-4 whitespace-nowrap">{song.release_date}</td>
      <td className="px-6 py-4 whitespace-nowrap">{((song.length) / 60).toFixed(2)}</td>
      <td className="px-4 py-2">
        <EditSongModal song={song} setSongs={setSongs} />
      </td>
      <td className="px-4 py-2">
        <button
          onClick={() => onDelete(song.id)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SongRow;