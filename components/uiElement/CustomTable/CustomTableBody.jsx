import React from "react";

const CustomTableBody = ({ column, row }) => {
  return (
    <>
      {column.map((col, index) => {
        return (
          <td
            key={index}
            className="p-2.5 first:pl-4 border-b border-[#EDF2F7] font-normal text-left last:text-right text-[0.8125rem]"
          >
            {typeof col?.render === "function" ? col.render(1, row) : <div></div>}
          </td>
        );
      })}
    </>
  );
};

export default CustomTableBody;


const kebabCase = string => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toLowerCase();