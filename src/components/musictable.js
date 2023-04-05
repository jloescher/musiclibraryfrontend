import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SongRow from './songrow';

const MusicTable = (props) => {

  const [musicData, setMusicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8000/api/music/');
      setMusicData(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateData = async () => {
      const result = await axios.get('http://localhost:8000/api/music/')
      setMusicData(result.data)
    }

    const interval = setInterval(() => {
      updateData()
    }, 1000)

    return () => clearInterval(interval)
  }, [musicData])

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
          {musicData.map((song) => (
            <SongRow selectedSong={song} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MusicTable;
