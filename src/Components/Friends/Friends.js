import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FriendContext } from "../../App";
import Friend from "../Friend/Friend";

const Friends = ({ friends, setFriends }) => {
  const [friendList, setFriendList] = useContext(FriendContext);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios.get(url).then((response) => setFriends(response.data));
  }, [setFriends]);

  //Add friend function
  const handleAddFriend = (friend) => {
    // console.log("Added", friend);
    setFriendList([...friendList, friend])
    console.log(friendList);
  };
//   console.log(setFriendList);
  return (
    <>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          handleAddFriend={handleAddFriend}
          friend={friend}
        >
    <Button className = 'btn-warning' onClick={() => handleAddFriend(friend)}>Add Friend</Button>
        </Friend>
      ))}
    </>
  );
};

export default Friends;
