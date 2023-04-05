import { useState } from 'react';
import Modal from './modal';

const AddSongModal = ({ isOpen, onClose, onAddSong }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleArtistChange = (e) => setArtist(e.target.value);
  const handleAlbumChange = (e) => setAlbum(e.target.value);
  const handleGenreChange = (e) => setGenre(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSong({ title, artist, album, genre });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="artist" className="block text-gray-700 font-bold mb-2">
            Artist
          </label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={handleArtistChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="album" className="block text-gray-700 font-bold mb-2">
            Album
          </label>
          <input
            type="text"
            id="album"
            value={album}
            onChange={handleAlbumChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="genre" className="block text-gray-700 font-bold mb-2">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={handleGenreChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Song
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddSongModal;
