import React, { useState, useEffect } from 'react';
import MusicTable from './components/musictable';
import AddSongModal from './components/addupdatesongmodal';
import Search from './components/search';
import axios from 'axios';

import './App.css'

function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/api/music/');
      setSongs(result.data);
    };
    fetchData();
  }, []);

  // TODO: Auto update breaks Edit functionality.
  // useEffect(() => {
  //   const updateData = async () => {
  //     const result = await axios.get('http://localhost:8000/api/music/')
  //     setSongs(result.data)
  //   }

  //   const interval = setInterval(() => {
  //     updateData()
  //   }, 1000)

  //   return () => clearInterval(interval)
  // }, [songs])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/music/${id}/`)
      alert('Song deleted successfully!')
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  };

  return (
    <div className="flex flex-col">
      <header className='h-auto p-4 bg-slate-700 text-gray-300 text-lg font-semibold w-full max-w-full'>Music Library</header>
      <div className='flex flex-row w-full p-4 justify-between'>
        <AddSongModal />
        <Search songs={songs} setSongs={setSongs} filteredSongs={filteredSongs} setFilteredSongs={setFilteredSongs} />
      </div>
      <MusicTable songs={songs} filteredSongs={filteredSongs} onDelete={handleDelete} />

    </div >

  );
}

export default App;
