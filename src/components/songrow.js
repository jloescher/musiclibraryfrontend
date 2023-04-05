import React from 'react';

const SongRow = ({ props, song, onSongSelect, onDelete }) => {

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{song.title}</td>
      <td className="px-6 py-4 whitespace-nowrap">{song.artist}</td>
      <td className="px-6 py-4 whitespace-nowrap">{song.album}</td>
      <td className="px-6 py-4 whitespace-nowrap">{song.genre}</td>
      <td className="px-6 py-4 whitespace-nowrap">{song.release_date}</td>
      <td className="px-6 py-4 whitespace-nowrap">{((song.length) / 60).toFixed(2)}</td>
      <td className="px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onSongSelect(song)}
        >
          Edit
        </button>
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