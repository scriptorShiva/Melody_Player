import React from "react";

export default function Song({ currSong }) {
  return (
    <>
      <div className="song-container">
        <img className="song-cover" src={currSong.cover} alt="song cover" />
        <h1 className="song-name">{currSong.name}</h1>
        <h2 className="song-artist"> {currSong.artist}</h2>
      </div>
    </>
  );
}
