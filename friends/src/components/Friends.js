// we are going to make a call to the server and get the data. Log it out to see what the data looks like and then we'll create a card for the users and map over the data applying the card to each friend item.

import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddFriend from "./AddFriend";
import FriendCard from "./FriendCard";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => getData(), []);
  function getData() {
    axiosWithAuth()
      .get("https://localhost:5000/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((error) => console.log(error.res));
  }
  return (
    <div>
      <AddFriend />
      {friends.length > 0
        ? friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))
        : null}
    </div>
  );
};

export default Friends;
