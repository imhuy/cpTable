import React from "react";

const Breadcrumb = () => {
  return (
    <nav className="flex items-center  list-none">
      <li className="leading-5 mx-1 first:ml-0">
        <a className="text-[#334155] text-[0.8125rem] cursor-pointer transition hover:text-[#DE3052]">Home</a>
      </li>
      <li className="leading-5 mx-1">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L5 5L1 1"
            stroke="#334155"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </li>
      <li className="leading-5 mx-1">
        <a className="text-[#334155] text-[0.8125rem] cursor-pointer transition hover:text-[#DE3052]">Games</a>
      </li>
      <li className="leading-5 mx-1">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L5 5L1 1"
            stroke="#334155"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </li>
      <li className="leading-5 mx-1">
        <a className="text-[#334155] text-[0.8125rem] transition">Best Free P2E NFT Games in 2022</a>
      </li>
    </nav>
  );
};

export default Breadcrumb;
