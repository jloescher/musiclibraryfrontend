import React from 'react';


const SongRow = ({ song, setEditSong, onDelete, isOpen, setIsModalOpen }) => {

  const handleEdit = (song) => {
    setIsModalOpen(!isOpen);
    setEditSong(song)
  };

  return (
    <>
      <tr>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td>{song.genre}</td>
        <td>{song.release_date}</td>
        <td>{((song.length) / 60).toFixed(2)}</td>
        <td><button onClick={() => handleEdit(song)}>Edit</button></td>
        <td><button onClick={() => onDelete(song.id)}>Delete</button></td>
      </tr>
    </>
  );
}

export default SongRow;
