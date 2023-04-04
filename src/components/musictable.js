import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MusicTable = () => {

  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/music/')
      .then(response => setMusicData(response.data))
      .catch(error => console.log(error));
  }, []);

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
            <th className="px-4 py-2">Likes</th>
          </tr>
        </thead>
        <tbody>
          {musicData.map((song) => (
            <tr key={song.id} className="bg-white border-b">
              <td className="px-4 py-2">{song.title}</td>
              <td className="px-4 py-2">{song.artist}</td>
              <td className="px-4 py-2">{song.album}</td>
              <td className="px-4 py-2">{song.genre}</td>
              <td className="px-4 py-2">{song.release_date}</td>
              <td className="px-4 py-2">{song.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;
