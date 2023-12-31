import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
// import "./assistant.css"; // Import your CSS file here

const Assistant = () => {
  const [showCallbackPopup, setShowCallbackPopup] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);

  const toggleCallbackPopup = () => {
    setShowCallbackPopup(!showCallbackPopup);
    setShowChatPopup(false);
  };

  const toggleChatPopup = () => {
    setShowChatPopup(!showChatPopup);
    setShowCallbackPopup(false);
  };

  return (
    <div>
      <div
        className="assistant-btn"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#6c63ff",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          padding: "15px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={toggleCallbackPopup}
      >
        {/* <i className="fa fa-headset" style={{ color: "#ffffff" }}></i> */}
        <FontAwesomeIcon icon={faHeadset} />
      </div>

      {/* Assistant Options (Hidden by default) */}
      <div
        className="assistant-options"
        style={{
          display: showCallbackPopup || showChatPopup ? "block" : "none",
          position: "fixed",
          bottom: "80px",
          right: "20px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          color: "black",
          borderRadius: "10px",
          padding: "10px",
          fontSize: "14px",
        }}
      >
        <div
          style={{ marginBottom: "10px", cursor: "pointer" }}
          onClick={toggleCallbackPopup}
        >
          Get in touch
        </div>
        <div style={{ cursor: "pointer" }} onClick={toggleChatPopup}>
          Chat with Me
        </div>
      </div>

      {/* Request Callback Popup (Hidden by default) */}
      {showCallbackPopup && (
        <div className="request-callback-popup">{/* Popup content */}</div>
      )}

      {/* Chat Popup (Hidden by default) */}
      {showChatPopup && <div className="chat-popup">{/* Popup content */}</div>}
    </div>
  );
};

export default Assistant;
