import React, { useEffect, useState } from "react";
import EditNft from "../../contentModal/EditNft";
import LayoutMain from "../../LayoutMain";
import Modal from "../../Modal";
import Breadcrumb from "../../uiElement/Breadcrumb";
import CustomTable from "../../uiElement/CustomTable";
import Pagination from "../../uiElement/Pagination";
import SelectCustom from "../../uiElement/SelectCustom";
import Tooltip from "../../uiElement/Tooltip";
import { getNFT, getTotalNFT, editNft } from "../../../api";

const renderIconPlatformByCode = (code) => {
  switch (code) {
    case "ios":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.354 16.487C20.016 15.981 19.121 14.766 19.02 13.317C18.921 11.905 19.613 10.651 20.871 9.96201L21.917 9.38901L21.17 8.45901C19.915 6.89601 18.119 5.96201 16.366 5.96201C15.151 5.96201 14.308 6.28001 13.631 6.53601C13.153 6.71701 12.776 6.85901 12.362 6.85901C11.89 6.85901 11.424 6.69301 10.884 6.50101C10.176 6.24901 9.374 5.96301 8.344 5.96301C6.354 5.96301 4.347 7.15101 3.107 9.06101C1.256 11.91 1.764 16.795 4.315 20.677C5.326 22.215 6.743 23.982 8.75 24C8.763 24 8.776 24 8.789 24C10.432 24 10.792 23.124 12.387 23.114C14.129 23.196 14.349 24.007 15.976 23.996C17.937 23.978 19.351 22.225 20.475 20.512C21.139 19.505 21.396 18.978 21.913 17.834L22.351 16.864L21.354 16.487Z"
            fill="#94A3B8"
          />
          <path
            d="M15.1 3.44999C15.75 2.61599 16.243 1.43899 16.064 0.235992C15.002 0.308992 13.762 0.983992 13.037 1.86399C12.379 2.66299 11.836 3.84699 12.047 4.99899C13.205 5.03499 14.404 4.34299 15.1 3.44999Z"
            fill="#94A3B8"
          />
        </svg>
      );

    case "mac":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.354 16.487C20.016 15.981 19.121 14.766 19.02 13.317C18.921 11.905 19.613 10.651 20.871 9.96201L21.917 9.38901L21.17 8.45901C19.915 6.89601 18.119 5.96201 16.366 5.96201C15.151 5.96201 14.308 6.28001 13.631 6.53601C13.153 6.71701 12.776 6.85901 12.362 6.85901C11.89 6.85901 11.424 6.69301 10.884 6.50101C10.176 6.24901 9.374 5.96301 8.344 5.96301C6.354 5.96301 4.347 7.15101 3.107 9.06101C1.256 11.91 1.764 16.795 4.315 20.677C5.326 22.215 6.743 23.982 8.75 24C8.763 24 8.776 24 8.789 24C10.432 24 10.792 23.124 12.387 23.114C14.129 23.196 14.349 24.007 15.976 23.996C17.937 23.978 19.351 22.225 20.475 20.512C21.139 19.505 21.396 18.978 21.913 17.834L22.351 16.864L21.354 16.487Z"
            fill="#94A3B8"
          />
          <path
            d="M15.1 3.44999C15.75 2.61599 16.243 1.43899 16.064 0.235992C15.002 0.308992 13.762 0.983992 13.037 1.86399C12.379 2.66299 11.836 3.84699 12.047 4.99899C13.205 5.03499 14.404 4.34299 15.1 3.44999Z"
            fill="#94A3B8"
          />
        </svg>
      );
    case "browser":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.1 9.79999H9.8V23L7.391 23C7.171 23 6.951 22.989 6.731 22.967C3.343 22.747 1.253 20.657 1.033 17.269C1.011 17.049 1 16.829 1 16.609V10.9C1 10.295 1.495 9.79999 2.1 9.79999ZM10.9 15.3L10.9 9.79999H21.9C22.505 9.79999 23 10.295 23 10.9V15.3H10.9ZM10.9 16.4L10.9 23L16.609 23C16.829 23 17.049 22.989 17.269 22.967C20.657 22.747 22.747 20.657 22.967 17.269C22.989 17.049 23 16.829 23 16.609V16.4H10.9Z"
            fill="#94A3B8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 7.6V7.391C23 7.171 22.989 6.951 22.967 6.731C22.747 3.343 20.657 1.253 17.269 1.033C17.049 1.011 16.829 1 16.609 1H7.391C7.171 1 6.951 1.011 6.731 1.033C3.343 1.253 1.253 3.343 1.033 6.731C1.011 6.951 1 7.171 1 7.391V7.611C1 8.216 1.495 8.711 2.1 8.711L21.9 8.7C22.505 8.7 23 8.205 23 7.6ZM5.4 4.3C4.79249 4.3 4.3 4.79249 4.3 5.4C4.3 6.00751 4.79249 6.5 5.4 6.5C6.00751 6.5 6.5 6.00751 6.5 5.4C6.5 4.79249 6.00751 4.3 5.4 4.3ZM7.6 5.4C7.6 4.79249 8.09249 4.3 8.7 4.3C9.30751 4.3 9.8 4.79249 9.8 5.4C9.8 6.00751 9.30751 6.5 8.7 6.5C8.09249 6.5 7.6 6.00751 7.6 5.4ZM12 4.3C11.3925 4.3 10.9 4.79249 10.9 5.4C10.9 6.00751 11.3925 6.5 12 6.5C12.6075 6.5 13.1 6.00751 13.1 5.4C13.1 4.79249 12.6075 4.3 12 4.3Z"
            fill="#94A3B8"
          />
        </svg>
      );
    case "android":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_121_287)">
            <path
              d="M6 18C6 18.55 6.45 19 7 19H8V22.5C8 23.33 8.67 24 9.5 24C10.33 24 11 23.33 11 22.5V19H13V22.5C13 23.33 13.67 24 14.5 24C15.33 24 16 23.33 16 22.5V19H17C17.55 19 18 18.55 18 18V8H6V18ZM3.5 8C2.67 8 2 8.67 2 9.5V16.5C2 17.33 2.67 18 3.5 18C4.33 18 5 17.33 5 16.5V9.5C5 8.67 4.33 8 3.5 8ZM20.5 8C19.67 8 19 8.67 19 9.5V16.5C19 17.33 19.67 18 20.5 18C21.33 18 22 17.33 22 16.5V9.5C22 8.67 21.33 8 20.5 8ZM15.53 2.16L16.83 0.86C17.03 0.66 17.03 0.35 16.83 0.15C16.63 -0.05 16.32 -0.05 16.12 0.15L14.64 1.63C13.8217 1.21559 12.9173 0.999759 12 1C11.04 1 10.14 1.23 9.34 1.63L7.85 0.15C7.65 -0.05 7.34 -0.05 7.14 0.15C6.94 0.35 6.94 0.66 7.14 0.86L8.45 2.17C7.69056 2.72569 7.0729 3.45267 6.6472 4.29191C6.2215 5.13115 5.99976 6.05897 6 7H18C18 5.01 17.03 3.25 15.53 2.16ZM10 5H9V4H10V5ZM15 5H14V4H15V5Z"
              fill="#94A3B8"
            />
          </g>
          <defs>
            <clipPath id="clip0_121_287">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "windows":
      return (
        <svg
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10ZM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8Zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5Zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84ZM10 5H9V4h1v1Zm5 0h-1V4h1v1Z"
            fill="#94A3B8"
          ></path>
        </svg>
      );
    case "android":
      return (
        <svg
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10ZM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8Zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5Zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84ZM10 5H9V4h1v1Zm5 0h-1V4h1v1Z"
            fill="#94A3B8"
          ></path>
        </svg>
      );
    case "pc":
      return (
        <svg
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10ZM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8Zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5Zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84ZM10 5H9V4h1v1Zm5 0h-1V4h1v1Z"
            fill="#94A3B8"
          ></path>
        </svg>
      );
    case "mobile":
      return (
        <svg
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10ZM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8Zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5Zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-1.99-.97-3.75-2.47-4.84ZM10 5H9V4h1v1Zm5 0h-1V4h1v1Z"
            fill="#94A3B8"
          ></path>
        </svg>
      );
    default:
      return (
        <>
          <button
            data-tooltip-target="tooltip-light"
            data-tooltip-style="light"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Error edit
          </button>
          <div
            id="tooltip-light"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip"
          >
            Tooltip content
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </>
      );
  }
};

const initialPagination = {
  page: 1,
  perPage: 10,
  totalRow: 1,
};

const initialItem = {
  BlockChains: [],
  Code: "",
  Genres: [],
  ImageUrl: "https://via.placeholder.com/40x40",
  Name: "",
  Platforms: [],
  Price: 0,
  Symbol: "",
};

const DiscoverBox = () => {
  const [dataNftFree, setDataNftFree] = useState([]);
  console.log("dataNftFree", dataNftFree);
  const [pagination, setPagination] = useState({ ...initialPagination });
  const [modal, setModal] = useState(false);
  const [itemChoose, setItemChoose] = useState({ ...initialItem });

  const handleCloseModal = (e) => {
    setModal(!modal);
    setItemChoose({ ...initialItem });
  };

  const activeHandler = (clickedActive) => {
    setPagination((prev) => ({ ...prev, page: +clickedActive }));
    console.log("clickedActive", pagination);
  };

  const columns = [
    [
      {
        dataIndex: "1",
        title: "#",
        width: "4%",
      },
      {
        dataIndex: "Name",
        title: "name",
        width: "33%",
        render: (text, record) => {
          return (
            <div className="flex items-center gap-x-4 ">
              <div className="basis-[40px]">
                <img
                  className="w-[40px] h-[40px]"
                  src={record.ImageUrl}
                  alt={record.Name}
                />
              </div>
              <div>
                <h3 className="capitalize text-[#0F172A] text-[0.9375rem] font-medium ">
                  {record.Name}
                  <span className="font-normal text-[#64748B] uppercase ml-1.5">
                    {record.Symbol}
                  </span>
                </h3>
                <div className="mt-1 flex items-center gap-2 ">
                  {record.BlockChains ? (
                    record.BlockChains.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <img
                          className="w-[20px] h-[20px]"
                          src={item.ExtendValue}
                          alt={item.code}
                        />
                        <span className="text-[#64748B] ml-1  text-[0.8125rem]">
                          {item.Name}
                        </span>
                      </div>
                    ))
                  ) : (
                    <img
                      className="w-[20px] h-[20px] rounded-full"
                      src="https://via.placeholder.com/20x20"
                      alt="thumnail"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        },
      },
      {
        key: "3",
        title: "Price",
        width: "18%",
        render: (text, record) => {
          return (
            <div className="text-[#0F172A] font-medium text-[1.0625rem]">
              ${record.Price.toFixed(2)}
            </div>
          );
        },
      },
      {
        key: "4",
        title: "Genre",
        width: "25%",
        render: (text, record) => {
          return (
            <ul className="flex items-center">
              {record.Genres.map((item, index) => (
                <li
                  key={index}
                  className="relative capitalize leading-5 text-[0.9375rem] px-[10px] first:pl-0 last:pr-0 after:content-[''] last:after:content-none after:absolute after:top-[10%] after:w-[2px] after:right-0 after:h-[80%] after:bg-[#0F172A] "
                >
                  {item.Code}
                </li>
              ))}
            </ul>
          );
        },
      },
      {
        key: "5",
        title: "Platform",
        width: "auto",
        render: (text, record) => {
          return (
            <ul className="flex items-center gap-2 justify-end">
              {record.Platforms.map((item, index) => (
                <li key={index} className="relative">
                  <Tooltip text={item.Name}>
                    {renderIconPlatformByCode(item.Code)}
                  </Tooltip>
                </li>
              ))}
            </ul>
          );
        },
      },
      {
        key: "6",
        title: "Action",
        width: "auto",
        render: (text, record) => {
          // chcek state, map nhieu Modal bi loi,
          // setContext toggle Modal
          // --> setContext cai Item

          return (
            <>
              <button
                type="button"
                className=" border bg-gradient-to-r from-[#D71C5D] to-[#FF9017] hover:from-[#D71C5D]/90 hover:to-[#FF9017]/90 focus:outline-none text-[#fff] focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                onClick={() => handleShowModal(record)}
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
                Edit
              </button>
            </>
          );
        },
      },
    ],
  ];

  const handleShowModal = (item) => {
    console.log("handleShowModal ==", item);
    setItemChoose({ ...item });
    setModal(!modal);
  };

  const updateItemJson = (item) => {

    let indexOfInJson = dataNftFree.findIndex((x) => item.Code === x.Code);

    if(indexOfInJson === -1){
      return
    }else{
      editNft(indexOfInJson, item)
      getNFT(((pagination.page - 1) * pagination.perPage ), (pagination.perPage * pagination.page)).then((data) => {
        setDataNftFree(data);
      })
      alert("Edit NFt success");
      setModal(!modal);
    }

  };


  console.log("pagination", pagination);

  useEffect(() => {
    getNFT(((pagination.page - 1) * pagination.perPage ), (pagination.perPage * pagination.page)).then((data) => {
      setDataNftFree(data);
    })

    getTotalNFT().then((data) => {
      setPagination((prev) => ({
        ...prev,
        totalRow: data,
      }));
    })

  }, [pagination.page]);

  return (
    <LayoutMain>
      {modal ? (
        <Modal title="Edit NFT" onClose={(e) => handleCloseModal(e)}>
          <EditNft item={itemChoose} onChange={updateItemJson} />
        </Modal>
      ) : (
        ""
      )}

      <div className="container m-auto">
        <Breadcrumb />
        <h1 className="text-[2rem] leading-[3rem] font-medium pt-8">
          Best Free P2E NFT Games in 2022
        </h1>
        <p className="text-[0.9375rem] py-1.5">
          Are you looking for Games that Free-to-play? Here are the best F2P NFT
          games available.
        </p>
        <div className="discover-filter mt-6">
          <div className="flex items-center gap-x-2.5">
            <SelectCustom
              defaultValue="Mick Poulaz"
              options={["Mick Poulaz", "Julien Schiano"]}
            />
            <SelectCustom
              defaultValue="Mick Poulaz"
              options={["Mick Poulaz", "Julien Schiano"]}
            />
            <SelectCustom
              defaultValue="Mick Poulaz"
              options={["Mick Poulaz", "Julien Schiano"]}
            />
          </div>
        </div>

        <div className="table-inner mt-6">
          <CustomTable columns={columns} dataSource={dataNftFree} />

          <div className="flex items-center justify-between  mt-6">
            <div className="flex-1 text-[#64748B] text-[0.9375rem]">
              Showing {(pagination.page - 1) * pagination.perPage + 1} -{" "}
              {pagination.perPage * pagination.page} out of
              {pagination.totalRow}
            </div>
            <div className="flex-1">
              <Pagination
                active={pagination.page}
                showTotal={pagination.perPage}
                total={pagination.totalRow}
                onClickHandler={activeHandler}
              />
            </div>

            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default DiscoverBox;
