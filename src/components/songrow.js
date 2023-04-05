import React from 'react';
import axios from 'axios';

const SongRow = ({ props, rowSelectedSong }) => {

  const handleEdit = (props, rowSelectedSong) => {
    props.onSongSelect(rowSelectedSong)
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/music/${id}/`);
      alert('Song deleted successfully!');
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">{rowSelectedSong.title}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rowSelectedSong.artist}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rowSelectedSong.album}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rowSelectedSong.genre}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rowSelectedSong.release_date}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rowSelectedSong.length}</td>

      <td className="px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEdit(props.rowSelectedSong)}
        >
          Edit
        </button>
      </td>
      <td className="px-4 py-2">
        <button
          onClick={() => handleDelete(props.rowSelectedSong.id)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SongRow;
