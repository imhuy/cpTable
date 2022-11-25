import React from "react";
import CustomTableBody from "./CustomTableBody";
import CustomTableHead from "./CustomTableHead";

const CustomTable = ({ columns = [], dataSource = [] }) => {
  const tableHead =
    columns.length > 0 &&
    columns.map((column, index) => (
      <CustomTableHead key={`columns-${index}`} column={column} />
    ));
  const tableBody2 = dataSource.map((data, index) => (
    <tr key={index} className="transition hover:bg-[#f1f5f9]">{
    columns.map((column, index2) => (
        <CustomTableBody key={index2} column={column} row={data} />
    ))}
    </tr>
  ));

  return (
    <table className="table-wrap bg-white w-full text-3.25 font-semibold">
      <thead className="border-b-2 border-[#64748B]">{tableHead}</thead>
      <tbody>{tableBody2}</tbody>
    </table>
  );
};

export default CustomTable;
