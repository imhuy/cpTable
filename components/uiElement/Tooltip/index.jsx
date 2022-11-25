import React from "react";

const Tooltip = ({
    children,
    text
})=> {
    return (
        <span className="group relative">
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded  bg-[#0F172A] text-[0.9375rem] font-medium ] px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-[#F1F5F9] text-[0.8125rem] before:content-[''] group-hover:opacity-100">
          {text}
        </span>
  
        {children}
      </span>
    )
}

export default Tooltip;