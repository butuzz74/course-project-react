import React from "react";

const TableHead = () => {
  return (
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
  );
};

export default TableHead;
