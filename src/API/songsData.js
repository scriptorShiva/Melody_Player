// src/API/songsData.js
import { v4 as uuidv4 } from "uuid";

const songsData = [
  // id: uuidv4(),
  // name: "song name",
  // artist: "artist naem",
  // songCover: "link-image",
  // active: false, //it tells whether your song playing right now or not.
  // sliderColor: ["", ""],
  // audio: "song Link",
  {
    name: "Keep Going",
    cover: "/music_files/sworn-artist.jpg",
    artist: "Swørn",
    audio: "/music_files/keep-going.mp3",
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: true,
  },
  {
    name: "Daylight",
    cover: "/music_files/daylight.jpg",
    artist: "Aiguille",
    audio: "/music_files/daylight.mp3",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Avino Melody",
    cover: "/music_files/avinii-artist.jpg",
    artist: "Avino",
    audio: "/music_files/avino-melody.mp3",
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "On My Way",
    cover: "/music_files/enhanted.jpg",
    artist: "Alan Walker",
    audio: "/music_files/on-my-way.mp3",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Post Malone Spiderman",
    cover: "/music_files/sunflower.jpg",
    artist: "Post Malone",
    audio: "/music_files/post-malone-spiderman.mp3",
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: false,
  },
];

export default songsData;
