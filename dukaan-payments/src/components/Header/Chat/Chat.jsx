import React from "react";
import chatIcon from "../../../Assets/Group.svg";
import "./chat.module.scss";
import menuIcon from "../../../Assets/Menu.svg";

const Chat = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <button>
        <img src={chatIcon} alt="chat" />
      </button>
      {/* This was given as an icon in figma no separate svg component was given */}
      <img src={menuIcon} alt="menu" />
    </div>
  );
};

export default Chat;
