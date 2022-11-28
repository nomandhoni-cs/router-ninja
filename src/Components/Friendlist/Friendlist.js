import React, { useContext } from "react";
import { FriendContext } from "../../App";
import Friend from "../Friend/Friend";
import { Button } from 'react-bootstrap';

const Friendlist = () => {
  const [friendList] = useContext(FriendContext);
  console.log(friendList);
  return <div className="friend-list-container">
    {
        friendList.map((friend) => <Friend key={friend.id} friend={friend}>
            <Button className = 'btn-warning'>Remove Friend</Button>
        </Friend>)
    }
  </div>;
};

export default Friendlist;
