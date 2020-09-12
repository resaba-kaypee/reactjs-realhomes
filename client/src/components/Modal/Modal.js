import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
    div.classList = "fixed z-50";
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="w-screen h-screen">{children}</div>,
    elRef.current
  );
};

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
