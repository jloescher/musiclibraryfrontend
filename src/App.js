import React, { useState, useEffect } from 'react';
import MusicTable from './components/musictable';
import AddSongModal from './components/addsongmodal';
import EditSongModal from './components/editsongmodal';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/api/music/');
      setSongs(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updateData = async () => {
      const result = await axios.get('http://localhost:8000/api/music/')
      setSongs(result.data)
    }

    const interval = setInterval(() => {
      updateData()
    }, 1000)

    return () => clearInterval(interval)
  }, [songs])

  const handleAdd = (song) => {
    axios.post('http://localhost:8000/api/music/', song)
      .then((res) => {
        setSongs([...songs, res.data]);
        setShowAddModal(false);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = async (song) => {
    try {
      await axios.put(`http://localhost:8000/api/music/${song.id}/`, song)
      const updatedSongs = songs.map((s) => s.id === song.id ? song : s);
      setSongs(updatedSongs);
      setSelectedSong(null);
      setShowEditModal(false);
    } catch (err) {
      console.error(err)
    }
  };

  const handleDelete = async (id) => {
    try {
      const songs = await axios.delete(`http://localhost:8000/api/music/${id}/`)
      const filteredSongs = songs.filter((s) => s.id !== id);
      setSongs(filteredSongs);
      alert('Song deleted successfully!')
    } catch (err) {
      alert(`Error: ${err.message}`)
    }
  };

  const handleSongSelect = (song) => {
    setSelectedSong(song);
    setShowEditModal(true);
  };

  return (
    <div className="container">
      <h1>Music Library</h1>
      <MusicTable songs={songs} onAdd={() => setShowAddModal(true)} onSongSelect={handleSongSelect} onDelete={handleDelete} />
      <AddSongModal show={showAddModal} onClose={() => setShowAddModal(false)} onAdd={handleAdd} />
      {selectedSong && <EditSongModal show={showEditModal} onClose={() => setShowEditModal(false)} song={selectedSong} onEdit={handleEdit} />}
    </div>
  );
}

export default App;
