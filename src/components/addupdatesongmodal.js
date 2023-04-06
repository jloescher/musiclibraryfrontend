import { useState, useEffect } from 'react';
import axios from 'axios';

const AddUpdateSongModal = ({ selectedSong }) => {

  const [showModal, setShowModal] = useState(false);
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
      setShowModal(false)
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
    <>
      <button
        className={id ? `bg-blue-600 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150` : `bg-green-600 text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {id ? "Edit" : "Add Song"}
      </button >
      {
        showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {id ? "Edit Song" : "Add Song"}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-70 h-6 w-6 text-2xl block">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
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
                          {id ? "Update" : "Save"}
                        </button>

                        <button type="reset" onClick={handleClear} className="px-4 py-2 bg-red-600 text-white rounded">
                          Clear
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
    </>
  );
};

export default AddUpdateSongModal;
