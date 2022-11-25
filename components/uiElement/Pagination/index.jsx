import react from "react";
import { times } from "lodash";

const Pagination = (
  {active, total,showTotal = 5, step = 1, onClickHandler}
) => {
  const showingNumbers = step * 2 + 1;
  let startNumber = 2;
  let startArrayNumber = step;

  let needStartDots = false;
  let needEndDots = false;
  let size = Math.ceil(total/showTotal)
  if (active > step) {
    startArrayNumber = active - step;

    needStartDots = active > step + startNumber ? true : false;
  }

  if (size > showingNumbers) {
    {
      needEndDots = size > active + step + 1 ? true : false;

      if (size < active + step + 1) {
        startArrayNumber = size - showingNumbers;
      }
    }
  }

  let contentNumber;

  return (
    <ul className="pagination flex items-center flex-wrap justify-center gap-x-1">
      <>
        {size > showingNumbers + startNumber ? (
          <>
            <li
            onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            className={`w-8 h-8 leading-8 rounded-lg text-center cursor-pointer hover:bg-[#D71C5D] hover:text-[#fff] ${active === 1 && "active bg-[#D71C5D] text-[#fff]"}`}
          >
            1
          </li>

          {needStartDots && <span>...</span>}
          {times(showingNumbers, (i) => (
            <li
              key={i++}
              {...(contentNumber = needStartDots
                ? startArrayNumber
                : startNumber)}
              {...startNumber++}
              {...startArrayNumber++}
              className={`w-8 h-8 leading-8 rounded-lg text-center cursor-pointer hover:bg-[#D71C5D] hover:text-[#fff] ${active === contentNumber && "active bg-[#D71C5D] text-[#fff]"}`}
              onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            >
              {contentNumber}
            </li>
          ))}
          {needEndDots && <span>...</span>}
          <li
            className={`w-8 h-8 leading-8 rounded-lg text-center cursor-pointer hover:bg-[#D71C5D] hover:text-[#fff] ${active === size && "active bg-[#D71C5D] text-[#fff]"}`}
            onClick={(e) => onClickHandler(e.currentTarget.textContent)}
          >
            {size}
          </li>
          </>
        ) : (
          ((startArrayNumber = 1),
          times(size, (i) => <li className="w-8 h-8 leading-8 rounded-lg text-center cursor-pointer hover:bg-[#D71C5D] hover:text-[#fff]" key={i++}>
            {startArrayNumber++}</li>))
        )}
      </>
    </ul>
  );
};

export default Pagination;
