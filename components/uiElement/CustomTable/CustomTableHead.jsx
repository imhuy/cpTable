import React from "react";

const CustomTableHead = ({ column }) => {
  return (
    <tr >
      {column.map((col, index) => (
        <th key={index} className="last-of-type:text-right [&:nth-child(5)]:text-right p-2.5 first:pl-4 font-medium uppercase text-left last:text-right text-[0.8125rem]" style={{
          width: col.width
        }}>{col.title}</th>
      ))}
    </tr>
  );
};

export default CustomTableHead;
