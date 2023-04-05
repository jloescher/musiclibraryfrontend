import React, { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import FilterData from './filterdata';
import SongRow from './songrow';
import EditSongModal from './editsongmodal';
=======
>>>>>>> parent of c0ef232 (Working on filter function)

const MusicTable = (props) => {
  const [musicData, setMusicData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [handleEdit, setHandleEdit] = useState();
  const [editSong, setEditSong] = useState();
  const [filterOptions, setFilterOptions] = useState({
    album: '',
    artist: '',
    genre: '',
    releaseDate: '',
    title: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8000/api/music/');
      setMusicData(result.data);
    };
    fetchData();
  }, []);

<<<<<<< HEAD
  const filterData = (data) => {
    const filteredData = musicData.filter((song) => {
      const { album, artist, genre, releaseDate, title } = filterOptions;
      return (
        song.album.toLowerCase().includes(album.toLowerCase()) &&
        song.artist.toLowerCase().includes(artist.toLowerCase()) &&
        song.genre.toLowerCase().includes(genre.toLowerCase()) &&
        song.release_date.includes(releaseDate) &&
        song.title.toLowerCase().includes(title.toLowerCase())
      );
    });
    setMusicData(filteredData);
  };
=======
  const handleEdit = (song) => {
    props.onSongSelect(song)
  };

  useEffect(() => {
    const updateData = async () => {
      const result = await axios.get('http://localhost:8000/api/music/')
      setMusicData(result.data)
    }
>>>>>>> parent of c0ef232 (Working on filter function)

  const resetFilter = () => {
    setMusicData([]);
    const fetchData = async () => {
      const result = await axios('http://localhost:8000/api/music/');
      setMusicData(result.data);
    };
    fetchData();
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
    <div className="w-full max-w-4xl mx-auto mt-8">
      <FilterData
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
        filterData={filterData}
        resetFilter={resetFilter}
      />
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Artist</th>
            <th className="px-4 py-2">Album</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Release Date</th>
            <th className="px-4 py-2">Length</th>
            <th className="px-4 py-2">Edit</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {musicData.map((song) => (
<<<<<<< HEAD
            <SongRow
              key={song.id}
              song={song}
              setSelectedSong={props.setSelectedSong}
              setEditSong={setEditSong}
            />
=======
            <tr key={song.id} className="bg-white border-b">
              <td className="px-4 py-2">{song.title}</td>
              <td className="px-4 py-2">{song.artist}</td>
              <td className="px-4 py-2">{song.album}</td>
              <td className="px-4 py-2">{song.genre}</td>
              <td className="px-4 py-2">{song.release_date}</td>
              <td className="px-4 py-2">{((song.length) / 60).toFixed(2)}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleEdit(song)}
                >
                  Edit
                </button>
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleDelete(song.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
>>>>>>> parent of c0ef232 (Working on filter function)
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <EditSongModal
          song={editSong}
          isOpen={isModalOpen}
          onClose={setHandleEdit}
        />
      )}
    </div>
  );
};

export default MusicTable;
