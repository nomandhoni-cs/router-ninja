import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { friendContainerStyle } from "../Friend/Friend";

const SingleFriend = () => {
  const [singleFriend, setSingleFriend] = useState({});
  const id = useParams();
  const singleFriendUrl = `https://jsonplaceholder.typicode.com/users/${id.friendID}`;
  useEffect(() => {
    axios
      .get(singleFriendUrl)
      .then((response) => setSingleFriend(response.data));
  }, [singleFriendUrl]);
  const { name, email, address, username, website } = singleFriend;
//   console.log(singleFriend);
  return (
    <div className="single-friend-container" style={friendContainerStyle}>
      <h1>Name: {name}</h1>
      <h4>Email: {email}</h4>
      <h4>Username: {username}</h4>
      <p>
        Address: {address ? address.suite : ""}, {address ? address.street : ""}
        , {address ? address.city : ""}
      </p>

      <a href={`${website}`}>{website}</a>
    </div>
  );
};

export default SingleFriend;
