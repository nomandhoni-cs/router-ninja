import React from "react";
import { useNavigate } from "react-router-dom";

export const friendContainerStyle = {
  border: "1px solid #0d6efd",
  borderRadius: "8px",
  margin: "10px",
  padding: "10px",
};
const Friend = (props) => {
  const navigation = useNavigate();
  const { friend } = props;
  const { name, email, id } = friend;
  // console.log(friend);
  const handleFriendInfo = () => {
    navigation(`${id}`);
  };
  return (
    <div className="friend-container" style={friendContainerStyle}>
      <div
        className="friend-basic-info"
        style={{ cursor: "pointer" }}
        onClick={handleFriendInfo}
      >
        <h1>Name: {name}</h1>
        <h5>Email: {email}</h5>
      </div>
      {props.children}
    </div>
  );
};

export default Friend;
