import { useState } from "react";

const Search = ({ songs, setSongs, filteredSongs, setFilteredSongs }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    if (songs && songs.length > 0) {
      const filteredSongs = songs.filter((song) =>
        song.title.toLowerCase().includes(value) ||
        song.artist.toLowerCase().includes(value) ||
        song.album.toLowerCase().includes(value) ||
        song.release_date.toLowerCase().includes(value) ||
        song.genre.toLowerCase().includes(value)
      );
      if (value.length > 0) {
        setFilteredSongs(filteredSongs);
      } else {
        setFilteredSongs(songs)
      }
    }
    setSearchTerm(value);
  };

  return (
    <div className="flex flex-row border">
      <label className="flex text-md rounded-l px-4 w-1/2 items-center justify-center border-r">
        Filter Songs:
      </label>
      <input
        type="text"
        className="items-center rounded-r px-4 w-2/3"
        placeholder="Search...(e.g. Pop music)"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
