import React, { useState } from "react";
import API from "../api";
import User from "./user";
import Header from "./header";
import TableHead from "./tableHead";

const Users = () => {
  const [usersData, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (event) => {
    setUsers(usersData.filter((el) => el._id !== event.target.id));
  };

  return (
    <>
      {!usersData || usersData.length === 0 ? (
        <h1 className="badge bg-danger fs-4">
          Никто не тусанет с тобой сегодня
        </h1>
      ) : (
        <>
          <>{Header(usersData)}</>
          <br />
          <table className="table">
            <TableHead />
            <tbody>{usersData.map((user) => User(user, handleDelete))}</tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Users;
