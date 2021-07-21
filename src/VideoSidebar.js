import React from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

export const VideoSidebar = () => {
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <FavoriteIcon fontSize="large" />
        <p>100</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>200</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>12</p>
      </div>
    </div>
  );
};
