import React, { useRef, useState } from "react";
import "./Video.css";
import { VideoFooter } from "./VideoFooter";
import { VideoSidebar } from "./VideoSidebar";

export const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v77.tiktokcdn.com/9193040a21ea7a21cef57dfa4e6f360d/60c5bcab/video/tos/useast2a/tos-useast2a-ve-0068c004/0dee7e3e70b540e497b0b1aa37315fed/?a=1233&br=7642&bt=3821&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202106130206510101890731653E9BE17A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am5kM3F3Nm5xNjMzNzczM0ApZDwzNmYzNmRkNzY2NDo0O2dlbmJyX2gtYy1gLS1kMTZzczReMGBfYy0xLl42LjUwYWA6Yw%3D%3D&vl=&vr="
      />

      <VideoFooter />
      <VideoSidebar />
    </div>
  );
};
