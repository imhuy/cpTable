import React, { useState } from "react";
import SelectOption from "./SelectCustomOption";

const SelectCustom = ({
  name = "customSelect",
  value = "Select Option",
  options = [],
  iconSelect,
  icon,
  defaultValue,
}) => {
  const [stateSelect, setStateSelect] = useState({
    value: options.includes(defaultValue) ? defaultValue : value,
    showOptions: false,
  });

  const handleClick = (e) => {
    e.preventDefault();
    setStateSelect((prev) => ({
      ...prev,
      showOptions: !stateSelect.showOptions,
    }));
  };

  const updateValue = (value) => {
    setStateSelect((prev) => ({ ...prev, showOptions: false, value }));
  };

  if (!iconSelect) {
    iconSelect = (
      <svg
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.95951 0.590027H1.03951C0.559508 0.590027 0.319508 1.17003 0.659508 1.51003L3.24951 4.10003C3.66451 4.51503 4.33951 4.51503 4.75451 4.10003L5.73951 3.11503L7.34451 1.51003C7.67951 1.17003 7.43951 0.590027 6.95951 0.590027Z"
          fill="#0F172A"
        />
      </svg>
    );
  }

  if (!icon) {
    icon = (
      <svg
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.10937 3.55499C9.31943 3.55787 9.52999 3.56076 9.74129 3.56292C12.0115 3.56292 13.6667 5.18142 13.6667 7.41649V10.2874C13.6667 12.5225 12.0115 14.141 9.74129 14.141C8.8319 14.1602 7.92251 14.1666 7.00658 14.1666C6.09065 14.1666 5.16818 14.1602 4.25879 14.141C1.98859 14.141 0.333374 12.5225 0.333374 10.2874V7.41649C0.333374 5.18142 1.98859 3.56292 4.26533 3.56292C5.12238 3.55008 5.99906 3.53723 6.88882 3.53723V3.42805C6.88882 2.98489 6.51591 2.62522 6.07103 2.62522H5.42333C4.68404 2.62522 4.08215 2.03434 4.08215 1.31501C4.08215 1.05168 4.30459 0.833313 4.57282 0.833313C4.8476 0.833313 5.0635 1.05168 5.0635 1.31501C5.0635 1.50769 5.22706 1.66183 5.42333 1.66183H6.07103C7.05892 1.66825 7.86363 2.45823 7.87018 3.42162V3.54365C8.2826 3.54365 8.69503 3.54931 9.10937 3.55499ZM6.23458 9.33043H5.54763V10.0112C5.54763 10.2745 5.32519 10.4929 5.05696 10.4929C4.78218 10.4929 4.56628 10.2745 4.56628 10.0112V9.33043H3.87279C3.60455 9.33043 3.38211 9.11848 3.38211 8.84873C3.38211 8.5854 3.60455 8.36703 3.87279 8.36703H4.56628V7.69266C4.56628 7.42933 4.78218 7.21096 5.05696 7.21096C5.32519 7.21096 5.54763 7.42933 5.54763 7.69266V8.36703H6.23458C6.50282 8.36703 6.72526 8.5854 6.72526 8.84873C6.72526 9.11848 6.50282 9.33043 6.23458 9.33043ZM9.01509 8.24501H9.08051C9.34875 8.24501 9.57119 8.03306 9.57119 7.76331C9.57119 7.49999 9.34875 7.28162 9.08051 7.28162H9.01509C8.74031 7.28162 8.52441 7.49999 8.52441 7.76331C8.52441 8.03306 8.74031 8.24501 9.01509 8.24501ZM10.1338 10.4544H10.1992C10.4675 10.4544 10.6899 10.2424 10.6899 9.97268C10.6899 9.70936 10.4675 9.49099 10.1992 9.49099H10.1338C9.85839 9.49099 9.64315 9.70936 9.64315 9.97268C9.64315 10.2424 9.85839 10.4544 10.1338 10.4544Z"
          fill="#0F172A"
        />
      </svg>
    );
  }

  return (
    <div className="relative">
      <input type="hidden" name={name} value={setStateSelect.value} />
      <button
        type="button"
        className={
          `relative transition-all text-[0.875rem] bg-[#F1F5F9] flex items-center  w-auto rounded-[10px] pl-2 pr-6 py-1.5 text-left cursor-default`
        }
        onClick={handleClick}
      >
        <span>{icon}</span>
        <span className="ml-1.5 block text-[0.8125rem]">
          {stateSelect.value}
        </span>
        <span className="ml-1.5 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {iconSelect}
        </span>
      </button>
      {stateSelect.showOptions && (
        <div className="absolute mt-1 z-10 rounded-[10px]  min-w-[12.5rem]">
          <ul className="max-h-56 rounded-md text-base ring-1 bg-[#fff] ring-black ring-opacity-5 overflow-auto focus:outline-none">
            {options.map((option, idx) => (
              <SelectOption
                key={idx}
                value={option}
                active={stateSelect.value === option}
                updateValue={updateValue}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectCustom;
