import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required");
      return;
    }

    // Redirect
    navigate(`editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <Link
        to={`/`}
        style={{
          textDecoration: "none",
          fontSize: "4em",
          color: "white",
          justifyContent: "center",
        }}
      >
        <IoArrowBackCircle />
      </Link>
      <div className="formWrapper">
        <div className="main-title" style={{ fontSize: "50px" }}>
          Code Collab
        </div>
        <br />
        <br />
        <h4 className="mainLabel">Enter ROOM ID to join room</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            Don't have an invite? Create a&nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
