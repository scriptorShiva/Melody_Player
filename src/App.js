import React, { useState } from "react";
import "./Styles/app.scss";
//importing components----------------------------------
import Song from "./Components/Song";
import PlayerControls from "./Components/PlayerControls";
import songsData from "./API/songsData";
import SongsLibrary from "./Components/SongsLibrary";
import Nav from "./Components/Nav";

export default function App() {
  //first we need to access our songData array.
  const [songs, setSongs] = useState(songsData);
  //when user clicks on it it must be in our current state or selected
  const [currSong, setCurrSong] = useState(songs[0]); //so we select 1st song inintially now I want ot access its all details using props.
  //state to check whether song is playing or not
  const [isSongPlaying, setIsSongPlaying] = useState(false); //by default we pass false
  //state to check for library to open or not
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currSong={currSong} />
      <PlayerControls
        currSong={currSong}
        isSongPlaying={isSongPlaying}
        setIsSongPlaying={setIsSongPlaying}
        songs={songs}
        setCurrSong={setCurrSong}
        setSongs={setSongs}
      />

      <SongsLibrary
        songs={songs}
        setCurrSong={setCurrSong}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
    </div>
  );
}
