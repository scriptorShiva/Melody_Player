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
    name: "Beaver Creek",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    artist: "Aso, Middle School, Aviino",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: true,
  },
  {
    name: "Daylight",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    artist: "Aiguille",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Keep Going",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    artist: "Swørn",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Nightfall",
    cover:
      "https://chillhop.com/wp-content/uploads/2022/05/1c9e8f008e40a1d5c496a85b2aaf8c96a14a3c88-1024x1024.jpg",
    artist: "Aiguille",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
    color: ["#EF8EA9", "#ab417f"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Reflection",
    cover:
      "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
    artist: "Swørn",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
    color: ["#CD607D", "#c94043"],
    id: uuidv4(),
    active: false,
  },
  {
    name: "Under the City Stars",
    cover:
      "https://chillhop.com/wp-content/uploads/2022/07/49bc1653b33bd42e570ecdeba7be86e8bd1b5c38-1024x1024.jpg",
    artist: "Aso, Middle School, Aviino",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: false,
  },

  //ADD MORE HERE
];

export default songsData;
