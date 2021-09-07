import React from "react";

const LogoutButton = () => {
  const logOutHandler = () => {
    localStorage.setItem("username", "");
    window.location.reload();
  };

  return (
    <div style={{ contentAlign: "center" }}>
      <button
        type="submit"
        onClick={logOutHandler}
        style={{
          width: "80px",
          height: "50px",
          background: "lightblue",
          borderRadius: "15%",
          fontWeight: "bolder",
          margin: "15px",
          float: "right",
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
