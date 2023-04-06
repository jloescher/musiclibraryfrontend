import React, { useState, useEffect } from 'react';
import SongRow from './songrow';

const MusicTable = ({ songs, filteredSongs, setSongs, onDelete }) => {
  const [displaySongs, setDisplaySongs] = useState([])

  useEffect(() => {
    if (filteredSongs.length > 0) {
      setDisplaySongs(filteredSongs)
    } else {
      setDisplaySongs(songs)
    }
  }, [filteredSongs, songs])

  return (
    <div className="w-full px-4">
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
          {displaySongs.map((song) => (
            <SongRow
              key={song.id}
              song={song}
              // setSongs={setSongs}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;