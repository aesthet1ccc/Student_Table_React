import React from "react";

const Table_head: React.FC = () => {
  return (
    <>
      <thead className="table_heading">
        <th>Имя Фамилия</th>
        <th>Email</th>
        <th>Возраст</th>
        <th>Сайт</th>
        <th>Адрес</th>
        <th>Телефон</th>
      </thead>
    </>
  );
};

export default Table_head;
