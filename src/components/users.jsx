import React, { useState } from "react";
import API from "../api";
import User from "./user";
import Header from "./header";
import TableHead from "./tableHead";

const Users = () => {
  const [use, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (event) => {
    setUsers(use.filter((el) => el._id !== event.target.id));
  };   

  return (
    <>
      <>{Header(use)}</>
      <br />
      <table className="table">
        <TableHead />
        <tbody>{use.map((user) => User(user, handleDelete))}</tbody>
      </table>
    </>
  );
};

export default Users;
