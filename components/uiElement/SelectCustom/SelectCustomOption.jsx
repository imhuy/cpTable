const SelectCustomOption = ({ value = "", active = false, updateValue, icon }) => {
  const handleChange = (e) => {
    e.preventDefault();
    updateValue(value);
  };

  if (!icon) {
    icon = (
      <svg
        className="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  return (
    <li
      className="relative group py-1.5 pl-2.5 pr-8 w-auto cursor-default hover:bg-[#D71c5d] select-none "
      onClick={handleChange}
    >
      <div className="flex items-center">
        <span className="ml-3 group-hover:text-white block font-normal truncate text-[0.8125rem]">{value}</span>
      </div>
        {active && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          {icon}
        </span>
      )}
    </li>
  );
};

export default SelectCustomOption;