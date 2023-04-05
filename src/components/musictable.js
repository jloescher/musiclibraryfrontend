import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterData from './filterdata';
import SongRow from './songrow';
import EditSongModal from './editsongmodal';

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

  const resetFilter = () => {
    setMusicData([]);
    const fetchData = async () => {
      const result = await axios('http://localhost:8000/api/music/');
      setMusicData(result.data);
    };
    fetchData();
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
            <SongRow
              key={song.id}
              song={song}
              setSelectedSong={props.setSelectedSong}
              setIsModalOpen={setIsModalOpen}
            />
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
