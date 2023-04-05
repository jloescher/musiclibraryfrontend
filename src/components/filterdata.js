import React, { useState } from 'react';

const FilterData = ({ setFilteredData }) => {
  const [filter, setFilter] = useState({
    album: '',
    artist: '',
    genre: '',
    release_date: '',
    title: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilteredData(filter);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap items-center space-x-4">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={filter.title}
          onChange={handleChange}
          className="px-2 py-1 border rounded"
        />

        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={filter.artist}
          onChange={handleChange}
          className="px-2 py-1 border rounded"
        />

        <label htmlFor="album">Album:</label>
        <input
          type="text"
          id="album"
          name="album"
          value={filter.album}
          onChange={handleChange}
          className="px-2 py-1 border rounded"
        />

        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={filter.genre}
          onChange={handleChange}
          className="px-2 py-1 border rounded"
        />

        <label htmlFor="release_date">Release Date:</label>
        <input
          type="date"
          id="release_date"
          name="release_date"
          value={filter.release_date}
          onChange={handleChange}
          className="px-2 py-1 border rounded"
        />

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Filter
        </button>
      </div>
    </form>
  );
};

export default FilterData;
