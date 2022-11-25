import React, { useEffect, useState } from "react";
import { searchApi } from "../../../api";

const SearchNft = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [keyword, setKeyWord] = useState("");
  const [searchByField, setSearchByField] = useState("Name");
  const [isDropdownSearch, setIsDropdownSearch] = useState(false);
  const [dataNftFree, setDataNftFree] = useState([]);
  useEffect(() => {
    searchApi(searchByField, keyword).then((res) => setDataNftFree(res));
  }, [keyword, searchByField]);

  return (
    <>
      <div className="flex relative">
        <div>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
            Your Email
          </label>
          <button
            onClick={() => setIsDropDown(!isDropDown)}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 "
            type="button"
          >
            {searchByField}
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {isDropDown ? (
          <div className="z-10 absolute left-0 bottom-[-80px] bg-white divide-y divide-gray-100 rounded shadow w-44 ">
            <ul
              className="py-1 text-sm text-gray-700 "
              aria-labelledby="dropdown-button"
            >
              <li
                onClick={() => {
                  setSearchByField("Name");
                  setIsDropDown(false);
                }}
              >
                <a href="#" class="block px-4 py-2 ">
                  Name
                </a>
              </li>
              <li
                onClick={() => {
                  setSearchByField("Symbol");
                  setIsDropDown(false);
                }}
              >
                <a href="#" className="block px-4 py-2">
                  Symbol
                </a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="relative w-full">
          <input
            type="search"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search"
            value={keyword}
            onChange={(e) => setKeyWord(e.target.value)}
            onFocus={() => setIsDropdownSearch(true)}
            onBlur={() => setIsDropdownSearch(false)}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        {isDropdownSearch ? (
          <div className="wrap absolute left-[100px] bottom-[-300px]">
            <div className="relative  overflow-y-auto p-2.5 w-[580px] h-[300px] z-20 text-sm text-gray-900 bg-gray-100 ">
 
              {
                dataNftFree.length < 1 ? <div className="grid place-content-center">Empty data</div> : dataNftFree.map((item, index) => (
                    <div
                      key={index}
                      className="p-1 font-normal text-left last:text-right text-[0.8125rem]"
                    >
                      <div className="flex items-center gap-x-4 ">
                        <div class="basis-[20px]">
                          <img
                            className="w-[20px] h-[20px]"
                            src={item.ImageUrl}
                            alt={item.Name}
                          />
                        </div>
                        <div>
                          <h3 className="capitalize text-[#0F172A] text-[0.9375rem] font-medium ">
                            {item.Name}
                            <span className="font-normal text-[#64748B] uppercase ml-1.5">
                              {item.Symbol}
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SearchNft;
