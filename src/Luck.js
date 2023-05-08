import React, { useState } from "react";
import { Link } from "react-router-dom";
const Luck = () => {
  const [luck, setLuck] = useState("오늘의 운세는?");
  const [song, setSong] = useState("오늘의 노래는?");
  const randomLuck = () => {
    const ranNum = Math.floor(Math.random() * 5);
    setLuck(luckybox[ranNum]);
  };

  const randomSong = () => {
    const ranNum2 = Math.floor(Math.random() * 10);
    setSong(songbox[ranNum2]);
  };

  const luckybox = {
    0: "오늘은 조심하셔야겠어요",
    1: "오늘의 행운 25%",
    2: "오늘은 무난한 날이네요",
    3: "오늘은 기분 좋은 일이 일어나겠어요!",
    4: "오늘의 행운은 모두 당신의 것!!!!",
  };

  const songbox = {
    0: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UzhTzCNmUWc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    1: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mBXBOLG06Wc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    2: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8khwZ4Dql_k"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    3: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9q0Sc37HxDk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    4: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8fdWqK3z5P0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    5: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xA3-NV2tZhM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    6: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bAsoc5FtolA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    7: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VoDUJV9f5kc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    8: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sqgxcCjD04s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
    9: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rvZtGFiHimA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  };

  return (
    <div>
      <div className="Luck">
        <h2>🍀오늘의 운세🍀</h2>
        <button onClick={randomLuck}>오늘의 운세 확인하기</button>
        <div className="lucky">{luck}</div>

        <div>
          <h2>🎤오늘의 추천 노래🎤</h2>
          <button onClick={randomSong}>추천 노래 확인하기</button>
          <div>{song}</div>
        </div>

        <Link to="/">
          <button> Back to TodoList</button>
        </Link>
      </div>
    </div>
  );
};

export default Luck;
