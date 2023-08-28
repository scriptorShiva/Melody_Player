import React from "react";

export default function SongsInfo({
  selectedSong,
  setCurrSong,
  setSongs,
  id,
  songs,
}) {
  //event handler
  const songSelectorHandler = (e) => {
    // console.log(selectedSong);
    setCurrSong(selectedSong);

    //add active : true/false state -------------------------------------------------
    // console.log(songs);
    const activeSongHandler = songs.map((val) => {
      if (val.id === id) {
        return {
          //return whole song (...val) and change active state to true
          ...val,
          active: true,
        };
      } else {
        return {
          ...val,
          active: false,
        };
      }
    });
    // //add it
    setSongs(activeSongHandler);
  };

  return (
    <>
      <div
        className={`song-info-container ${
          selectedSong.active ? "selected" : ""
        }`}
        onClick={songSelectorHandler}
      >
        <div className="song-img">
          <img src={selectedSong.cover} alt="img" />
        </div>
        <div className="song-data">
          <p className="title">{selectedSong.name}</p>
          <p className="artist">{selectedSong.artist}</p>
        </div>
      </div>
    </>
  );
}
