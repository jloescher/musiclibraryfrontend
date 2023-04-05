import React, { useState } from 'react';

const EditSongModal = ({ song, isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);

  const handleSave = () => {
    onSave({
      id: song.id,
      title,
      artist,
      album,
    });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <h2 className="title is-4">Edit Song</h2>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Artist</label>
            <div className="control">
              <input className="input" type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Album</label>
            <div className="control">
              <input className="input" type="text" value={album} onChange={(e) => setAlbum(e.target.value)} />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" onClick={handleSave}>Save</button>
            </div>
            <div className="control">
              <button className="button is-link" onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default EditSongModal;
