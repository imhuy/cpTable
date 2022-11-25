import React, {useRef, useEffect, useState } from "react";
import { createPortal } from 'react-dom'

const Modal = ({
  children,
  onClose,
  title="Title Modal"
}) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    ref.current = document.querySelector("#modal");
    setMounted(true)
  }, [])

  return (mounted && ref.current) ? createPortal(
  <div className="modal-wrap z-30 fixed top-0  w-full h-full left-0 bg-[#000]/50">
    <div className="absolute z-40  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
      <div className="modal-content relative rounded-lg w-full max-w-[30rem] m-auto bg-[#fff] p-4">
        <div className="modal-icon absolute top-4 right-4 cursor-pointer" onClick={onClose}>X</div>
        <h3>{title}</h3>
        <div className="modal-content relative">
          {children}
        </div>
      </div>
    </div>
    <div className="modal-mask z-30 fixed top-0  w-full h-full left-0" onClick={onClose}></div>
  </div>, ref.current) : null
}

export default Modal;