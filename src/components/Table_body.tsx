import React from "react";
import Tooltip from "./ToolTip.tsx";

type TableBodyProps = {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
  website: string;
  phone: string;
  address: string;
};

const Table_body: React.FC<TableBodyProps> = ({
  firstname,
  lastname,
  email,
  age,
  website,
  phone,
  address,
}) => {
  return (
    <>
      <tbody className="table_body">
        <td>
          {firstname} {lastname}
        </td>
        <td>{email}</td>
        <td>{age}</td>
        <td>{website}</td>
        <td>
          <Tooltip address={address}>{address}</Tooltip>
        </td>
        <td>{phone}</td>
      </tbody>
    </>
  );
};

export default Table_body;
