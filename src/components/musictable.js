import React from 'react';
import SongRow from './songrow';

const MusicTable = ({ songs, setSongs, setEditSong, setSelectedSong, onSongSelect, onDelete }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Artist</th>
            <th className="px-4 py-2">Album</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Release Date</th>
            <th className="px-4 py-2">Length</th>
            <th className='px-4 py-2'>Edit</th>
            <th className='px-4 py-2'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <SongRow
              key={song.id}
              song={song}
              setSongs={setSongs}
              setEditSong={setEditSong}
              setSelectedSong={setSelectedSong}
              onSongSelect={onSongSelect}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;