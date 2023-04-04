import './App.css';
import AppHeader from './components/appheader';
import Card from './components/card';
import AddSongForm from './components/addsongform';
import MusicTable from './components/musictable';

function App() {
  return (
    <div className="App">
      <AppHeader title="Music Library" />
      <div className='flex flex-row space-x-4 items-stretch justify-center pt-4'>
        <Card width="w-1/3">
          <AddSongForm />
        </Card>
        <Card width="w-1/2">
          <MusicTable />
        </Card>
      </div>



    </div>
  );
}

export default App;
