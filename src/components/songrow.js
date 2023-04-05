import React from 'react';
import axios from 'axios';

const SongRow = ({ props }) => {

  const handleEdit = (props) => {
    props.onSongSelect(props.selectedSong)
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
      <td className="px-6 py-4 whitespace-nowrap">{props.selectedSong.title}</td>
      <td className="px-6 py-4 whitespace-nowrap">{props.selectedSong.artist}</td>
      <td className="px-6 py-4 whitespace-nowrap">{props.selectedSong.album}</td>
      <td className="px-6 py-4 whitespace-nowrap">{props.selectedSong.genre}</td>
      <td className="px-6 py-4 whitespace-nowrap">{props.selectedSong.length}</td>
      <td className="px-6 py-4 whitespace-nowrap">{props.selectedSong.release_date}</td>
      <td className="px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleEdit(props.selectedSong)}
        >
          Edit
        </button>
      </td>
      <td className="px-4 py-2">
        <button
          onClick={() => handleDelete(props.selectedSong.id)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SongRow;
