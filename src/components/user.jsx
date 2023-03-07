import React from "react";

const User = (el, fun) => {
  return (
    <tr key={el._id}>
      <td>{el.name}</td>
      <td>
        {el.qualities.map((el) => (
          <span key={el._id} className={`badge bg-${el.color} ms-3`}>
            {el.name}
          </span>
        ))}
      </td>
      <td>{el.profession.name}</td>
      <td>{el.completedMeetings}</td>
      <td>{el.rate}</td>
      <td>
        <button
          type="button"
          className="btn btn-dark bg-danger"
          onClick={fun}
          id={el._id}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
