import React, { useState } from "react";
import {
  objectGenre,
  objectPlatform,
  objectBlockchain,
} from "../../../public/dataSelect";
import Select from "react-select";

const EditNft = ({ item, onChange }) => {
  const [itemNews, setItemNews] = useState({ ...item });
  const { BlockChains } = item;


  const onChangeSelectGenre = (e) => {
    setItemNews({
      ...itemNews,
      Genres: e.map(({ value, label }) => ({
        Code: value,
        Name: label,
      })),
    });
  };
  const onChangeSelectBlockchain = (e) => {
    console.log("e", e)
    setItemNews({
      ...itemNews,
      BlockChains: e.map(({ value, label }) => {
        const resultIndex = BlockChains.findIndex((x) => x.Code === value);
        console.log("Go Go GO",BlockChains[resultIndex]?.ExtendValue)
        
        return {
            Code: value,
            Name: label,
            ExtendValue: resultIndex ? BlockChains[resultIndex]?.ExtendValue  : 'https://via.placeholder.com/40x40'
        }
      }),
    });
  };
  const onChangeSelectPlatform = (e) => {
    setItemNews({
      ...itemNews,
      Platforms: e.map(({ value, label }) => ({
        Code: value,
        Name: label,
      })),
    });
  };

  return (
    <div className="modal-content">
      <div className="flex gap-[1rem]">
        <div className="flex-1">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
            aria-label="disabled input"
          >
            Name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 cursor-not-allowed border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
            value={itemNews.Name}
            disabled
          />
        </div>

        <div className="mb-4 basis-[50px] m-auto">
          <label
            htmlFor="images"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Images
          </label>
          <img
            className="w-[40px] h-[40px] m-auto"
            src="https://tk-storage.s3.ap-southeast-1.amazonaws.com/host/game/Decentraland_thumb_64x64_20220629112359.png"
            alt="Decentraland"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="symbol"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Symbol
        </label>
        <input
          type="text"
          id="Symbol"
          value={itemNews.Symbol}
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Symbol"
          onChange={(e) => setItemNews({ ...itemNews, Symbol: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Price
        </label>
        <input
          type="text"
          id="price"
          value={itemNews.Price}
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Price"
          onChange={(e) => setItemNews({ ...itemNews, Price: e.target.value })}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Genre
        </label>
        <Select
          isMulti
          name="genre"
          options={objectGenre.map(({ Code, Name }) => ({
            value: Code,
            label: Name,
          }))}
          className="basic-multi-select"
          classNamePrefix="select"
          defaultValue={itemNews.Genres.map(({ Code, Name }) => ({
            value: Code,
            label: Name,
          }))}
          onChange={onChangeSelectGenre}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Blockchain
        </label>
        <Select
          isMulti
          name="blockchain"
          options={objectBlockchain.map(({ Code, Name }) => ({
            value: Code,
            label: Name,
          }))}
          className="basic-multi-select"
          classNamePrefix="select"
          defaultValue={itemNews.BlockChains.map(({ Code, Name }) => ({
            value: Code,
            label: Name,
          }))}
          onChange={onChangeSelectBlockchain}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Platform
        </label>
        <Select
          isMulti
          name="platform"
          options={objectPlatform.map(({ Code, Name }) => ({
            value: Code,
            label: Name,
          }))}
          className="basic-multi-select"
          classNamePrefix="select"
          defaultValue={itemNews.Platforms.map(({ Code, Name }) => ({
            value: Code,
            label: Name,
          }))}
          onChange={onChangeSelectPlatform}
        />
      </div>
      <button
        type="button"
        className=" border bg-gradient-to-r from-[#D71C5D] to-[#FF9017] hover:from-[#D71C5D]/90 hover:to-[#FF9017]/90 focus:outline-none text-[#fff] focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        onClick={() => onChange(itemNews)}
      >
        <svg
          className="mr-1"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.25em"
          width="1.25em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
          <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
        </svg>
        SAVE
      </button>
    </div>
  );
};

export default EditNft;
