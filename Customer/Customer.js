import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/card/Card";
const Customer = () => {
  const user = useSelector((state) => {
    return state.data.users;
  });
  return (
    <div>
      {user.map((user, index) => {
        return <Card key={index} user={user} id={index} />;
      })}
    </div>
  );
};

export default Customer;
