import React from "react";
import SongsInfo from "./SongsInfo";

export default function SongsLibrary({
  songs,
  setCurrSong,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) {
  return (
    <>
      <div
        className={`library-container ${
          libraryStatus ? "activate-library" : ""
        }`}
      >
        <div className="title-library">Library</div>
        {songs.map((val) => (
          <SongsInfo
            selectedSong={val}
            setCurrSong={setCurrSong}
            setSongs={setSongs}
            id={val.id}
            songs={songs}
            key={val.id}
          />
        ))}
      </div>
    </>
  );
}
