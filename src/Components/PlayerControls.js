//here you import whole thing
import React, { useRef, useState, useEffect } from "react";

//{ } means we are importing one specific thing from a file. and fontAwesomeIcon is just a component that we import.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Notice that the faCoffee icon is imported from @fortawesome/free-solid-svg-icons as an object
// and then provided to the icon prop as an object.
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

export default function PlayerControls({
  currSong,
  isSongPlaying,
  setIsSongPlaying,
  songs,
  setCurrSong,
  setSongs,
}) {
  //useEffect hook
  useEffect(() => {
    //add active : true/false state -------------------------------------------------
    if (isSongPlaying) {
      audioRef.current.pause();

      setIsSongPlaying(!isSongPlaying); //when we click on it it do opposite of what it is
    }
    const activeSongHandler = songs.map(
      (val) => {
        if (val.id === currSong.id) {
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
      }

      //run this code eveytime when our song gets updated
    );
    // //add it
    setSongs(activeSongHandler);
  }, [currSong]);

  //define audio ref
  const audioRef = useRef(null); //passes initial value as null
  //Event handler
  const playSongHandler = () => {
    //here you can't access html using document.getElementById(); so for that we need useRef.
    //now when we click on button we get our access of html component
    //play is buitin audio function
    if (isSongPlaying) {
      audioRef.current.pause();
      setIsSongPlaying(!isSongPlaying); //when we click on it it do opposite of what it is
    } else {
      audioRef.current.play();
      setIsSongPlaying(!isSongPlaying); //when we click on it it do opposite of what it is
    }
  };
  //skip forward and backward handlers
  const skipSongHandler = (direction) => {
    let currentSongIndex = songs.findIndex((val) => val.id === currSong.id);
    // console.log(currentSongIndex);
    // console.log(songs[(currentSongIndex + 1) % songs.length]);
    // console.log(songs.length);
    if (direction === "skip-forward") {
      setCurrSong(songs[(currentSongIndex + 1) % songs.length]);
    }
    if (direction === "skip-backward") {
      if ((currentSongIndex - 1) % songs.length === -1) {
        setCurrSong(songs[songs.length - 1]);
        return;
      }
      setCurrSong(songs[(currentSongIndex - 1) % songs.length]);
    }
  };
  //need state for time of Music.
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
  });
  //function of timeUpdate Handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongTime({ ...songTime, currentTime: current, duration: duration });
  };
  //function that convets time into understadable format
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  //function that handles draggable song
  const draggHandler = (e) => {
    console.log(e.target.value); //when we drag we get diffrent values
    audioRef.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  };
  return (
    <>
      <div className="player-container">
        <div className="time-control">
          <p> {getTime(songTime.currentTime)}</p>
          <input
            type="range"
            min={0}
            max={songTime.duration || 0}
            value={songTime.currentTime}
            onChange={draggHandler}
          />
          <p>{getTime(songTime.duration)}</p>
        </div>
        {/* here we use fontAwesome icon component and pass props into it. */}
        <div className="player-icon">
          <FontAwesomeIcon
            className="backward"
            icon={faAngleLeft}
            size="2x"
            onClick={() => skipSongHandler("skip-backward")}
          />
          <FontAwesomeIcon
            className="play"
            icon={isSongPlaying ? faPause : faPlay}
            size="2x"
            onClick={playSongHandler}
          />
          <FontAwesomeIcon
            className="forward"
            icon={faAngleRight}
            size="2x"
            onClick={() => skipSongHandler("skip-forward")}
          />
        </div>
        {/* add audio ref for accessing */}
        <audio
          ref={audioRef}
          src={currSong.audio}
          onTimeUpdate={timeUpdateHandler}
        ></audio>
      </div>
    </>
  );
}
