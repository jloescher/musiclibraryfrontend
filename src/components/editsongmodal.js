import React, { useState } from 'react';
import axios from 'axios';
import Modal from './modal';

// { selectedSong && <EditSongModal show={showEditModal} onClose={() => setShowEditModal(false)} song={selectedSong} onEdit={handleEdit} /> }

const EditSongModal = ({ song, setSongs }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [genre, setGenre] = useState(song.genre);
  const [releaseDate, setReleaseDate] = useState(song.release_date);
  const [length, setLength] = useState(song.length);

  const [showModal, setShowModal] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8000/api/music/${song.id}/`, song)
      // const updatedSongs = songs.map((s) => s.id === song.id ? song : s);
      // setSongs(updatedSongs);
      setShowModal(false)
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <Modal modelTitle="Edit Song" buttonText="Edit" showModel={showModal} setShowModal={setShowModal}>
      <form>
        <div>
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="artist" className="block text-gray-700 font-bold mb-2">Artist:</label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="album" className="block text-gray-700 font-bold mb-2">Album:</label>
          <input
            type="text"
            id="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="album" className="block text-gray-700 font-bold mb-2">Genre:</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="album" className="block text-gray-700 font-bold mb-2">Release Date:</label>
          <input
            type="text"
            id="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="album" className="block text-gray-700 font-bold mb-2">Length:</label>
          <input
            type="text"
            id="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex mt-4 justify-end">
          <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditSongModal;
