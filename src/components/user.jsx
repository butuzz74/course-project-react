import React from "react";

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
          className="btn btn-dark bg-danger"
          onClick={handleDelete}
          id={user._id}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
