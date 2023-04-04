import { useState, useEffect } from 'react';
import axios from 'axios';

const AddSongForm = ({ selectedSong }) => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (selectedSong) {
      setId(selectedSong.id)
      setTitle(selectedSong.title)
      setArtist(selectedSong.artist)
      setAlbum(selectedSong.album)
      setGenre(selectedSong.genre)
      setLength(selectedSong.length)
    };
  }, [selectedSong]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:8000/api/music/${id}/`, {
          title,
          artist,
          album,
          genre,
          length,
        });
      } else {
        await axios.post('http://localhost:8000/api/music/', {
          title,
          artist,
          album,
          genre,
          length,
        });
      }
      setTitle('');
      setArtist('');
      setAlbum('');
      setGenre('');
      setLength(0);
      alert('Song added/updated successfully!');
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-2 py-1 border rounded"
        required
      />

      <label htmlFor="artist">Artist:</label>
      <input
        type="text"
        id="artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="px-2 py-1 border rounded"
        required
      />

      <label htmlFor="album">Album:</label>
      <input
        type="text"
        id="album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        className="px-2 py-1 border rounded"
        required
      />

      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        id="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="px-2 py-1 border rounded"
        required
      />

      <label htmlFor="length">Length:</label>
      <input
        type="number"
        id="length"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
        className="px-2 py-1 border rounded"
        required
      />

      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add Song
      </button>
    </form>
  );
};

export default AddSongForm;
