import { useState } from 'react';
import './App.css';
import AppHeader from './components/appheader';
import Card from './components/card';
import AddSongForm from './components/addsongform';
import MusicTable from './components/musictable';

function App() {

  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  }

  return (
    <div className="App">
      <AppHeader title="Music Library" />
      <div className='flex flex-row space-x-4 items-stretch justify-center pt-4'>
        <Card width="w-1/3">
          <AddSongForm selectedSong={selectedSong} />
        </Card>
        <Card width="w-1/2">
          <MusicTable onSongSelect={handleSongSelect} />
        </Card>
      </div>



    </div>
  );
}

export default App;