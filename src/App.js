import React, { useState, useEffect } from 'react';
import MusicTable from './components/musictable';
import AddSongModal from './components/addsongmodal';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);

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
      })
      .catch((err) => console.log(err));
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

  return (
    <div className="container">
      <h1>Music Library</h1>
      <MusicTable songs={songs} onDelete={handleDelete} />
      <AddSongModal onAdd={handleAdd} />
    </div>
  );
}

export default App;
