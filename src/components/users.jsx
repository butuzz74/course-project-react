import React, { useState } from "react";
import API from "../api";

const Users = () => {
  const [usersData, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (id) => {
    setUsers(usersData.filter((el) => el._id !== id));
  };

  const User = (user, handleDelete) => {
    return (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((el) => (
            <span key={el._id} className={`badge bg-${el.color} ms-3`}>
              {el.name}
            </span>
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}/5</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(user._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <>
      {!usersData || usersData.length === 0 ? (
        <h1 className="badge bg-danger fs-4">
          Никто не тусанет с тобой сегодня
        </h1>
      ) : (
        <>
          {usersData.length > 4 || usersData.length === 1 ? (
            <h1 className="badge bg-primary fs-4">
              {`${usersData.length} человек тусанет с тобой сегодня`}
            </h1>
          ) : (
            <h1 className="badge bg-primary fs-4">
              {`${usersData.length} человека тусанет с тобой сегодня`}
            </h1>
          )}
          <br />
          <table className="table">
            <thead className="border-bottom-0 border-2">
              <tr>
                <th>Имя</th>
                <th>Качества</th>
                <th>Профессия</th>
                <th>Встретился,раз</th>
                <th>Оценка</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{usersData.map((user) => User(user, handleDelete))}</tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Users;
