import React from "react";
import { Card, CardText } from "reactstrap";

const FriendCard = ({ friend }) => {
  return (
    <Card className="card">
      <div className="card-body">
        <p className="card-text">
          <CardText>Name: {friend.name}</CardText>
          <CardText>Age: {friend.age}</CardText>
          <CardText>Email: {friend.email}</CardText>
        </p>
      </div>
    </Card>
  );
};

export default FriendCard;
