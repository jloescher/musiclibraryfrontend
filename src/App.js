import React, { useState } from 'react';
import './App.css';
import FilterData from './components/filterdata';
import MusicTable from './components/musictable';
import AddSongForm from './components/addsongform';
import EditSongModal from './components/editsongmodal';

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
    </div>
  );
}

export default App;
