import React, { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import FilterData from './components/filterdata';
import MusicTable from './components/musictable';
import AddSongForm from './components/addsongform';
import EditSongModal from './components/editsongmodal';
=======
import AppHeader from './components/appheader';
import Card from './components/card';
import AddSongForm from './components/addsongform';
import MusicTable from './components/musictable';
>>>>>>> parent of c0ef232 (Working on filter function)

function App() {
  const [songs, setSongs] = useState([]);
  const [filter, setFilter] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editSong, setEditSong] = useState(null);

  const addSong = (song) => {
    setSongs([...songs, song]);
    setShowAddModal(false);
  };

  const editSongData = (song) => {
    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return { ...s, ...song };
      }
      return s;
    });
    setSongs(newSongs);
    setShowEditModal(false);
    setEditSong(null);
  };

  const deleteSong = (id) => {
    const newSongs = songs.filter((s) => s.id !== id);
    setSongs(newSongs);
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <h1>Song Library</h1>
      <FilterData filter={filter} setFilter={setFilter} />
      <MusicTable
        songs={songs}
        filter={filter}
        deleteSong={deleteSong}
        setShowEditModal={setShowEditModal}
        setEditSong={setEditSong}
      />
      <button onClick={() => setShowAddModal(true)}>Add Song</button>
      {showAddModal && <AddSongForm addSong={addSong} setShowAddModal={setShowAddModal} />}
      {showEditModal && <EditSongModal editSongData={editSongData} setShowEditModal={setShowEditModal} editSong={editSong} />}
=======
      <AppHeader title="Music Library" />
      <div className='flex flex-row space-x-4 items-stretch justify-center pt-4'>
        <Card width="w-1/3">
          <AddSongForm selectedSong={selectedSong} />
        </Card>
        <Card width="w-1/2">
          <MusicTable onSongSelect={handleSongSelect} />
        </Card>
      </div>



>>>>>>> parent of c0ef232 (Working on filter function)
    </div>
  );
}

export default App;
