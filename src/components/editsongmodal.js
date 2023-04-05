import React, { useState } from 'react';

const EditSongModal = ({ song, setSong, handleClose }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);

  const handleSave = () => {
    setSong({ id: song.id, title, artist, album });
    handleClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Edit Song</h2>
        <form onSubmit={handleSave}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="artist">Artist:</label>
            <input
              type="text"
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="album">Album:</label>
            <input
              type="text"
              id="album"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditSongModal;
