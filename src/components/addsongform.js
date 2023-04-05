import { useState, useEffect } from 'react';
import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css';

// TODO: As a music enthusiast, I want to be able to filter the table of music by album, artist, genre, release date, or title.  


const AddSongForm = ({ selectedSong }) => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (selectedSong) {
      setId(selectedSong.id)
      setTitle(selectedSong.title)
      setArtist(selectedSong.artist)
      setAlbum(selectedSong.album)
      setGenre(selectedSong.genre)
      setReleaseDate(selectedSong.release_date)
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
          release_date: releaseDate,
          length,
        });
      } else {
        await axios.post('http://localhost:8000/api/music/', {
          title,
          artist,
          album,
          genre,
          release_date: releaseDate,
          length,
        });
      }
      setTitle('');
      setArtist('');
      setAlbum('');
      setGenre('');
      setReleaseDate('')
      setLength(0);
      alert('Song added/updated successfully!');
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const handleClear = async (e) => {
    e.preventDefault()
    setId(null);
    setTitle('');
    setArtist('');
    setAlbum('');
    setGenre('');
    setReleaseDate('')
    setLength(0);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 items-start">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-2 py-1 border rounded w-full"
        required
      />

      <label htmlFor="artist">Artist:</label>
      <input
        type="text"
        id="artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="px-2 py-1 border rounded w-full"
        required
      />

      <label htmlFor="album">Album:</label>
      <input
        type="text"
        id="album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        className="px-2 py-1 border rounded w-full"
        required
      />

      <label htmlFor="genre">Genre:</label>
      <input
        type="text"
        id="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="px-2 py-1 border rounded w-full"
        required
      />
      <label htmlFor="release_date">Release Date:</label>
      <input
        type="text"
        id="release_date"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        className="px-2 py-1 border rounded w-full"
        required
      />

      {/* TODO: Need to identify why the DatePicker Breaks the API submission <DatePicker
        id="release_date"
        selected={releaseDate}
        onChange={(date) => setReleaseDate(moment(date).format("YYYY-MM-DD"))}
        dateFormat={FORMAT}
        className="px-2 py-1 border rounded w-full"
      /> */}

      <label htmlFor="length">Length (in Seconds):</label>
      <input
        type="text"
        id="length"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value))}
        className="px-2 py-1 border rounded w-full"
        required
      />
      <div className='flex flex-row space-x-4'>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add/Update Song
        </button>

        <button type="reset" onClick={handleClear} className="px-4 py-2 bg-red-600 text-white rounded">
          Clear
        </button>
      </div>
    </form>
  );
};

export default AddSongForm;
