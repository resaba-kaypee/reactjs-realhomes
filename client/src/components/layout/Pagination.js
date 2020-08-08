import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPaginate,
  from,
  to,
  ...rest
}) => {
  const [start, setStart] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  for (let i = 0; i < totalPages; i++) pages[i] = i + 1;

  const currentPages = pages.splice(start, 5);

  const onClick = (e) => {
    e.preventDefault();

    const { textContent: value } = e.target;

    setCurrentPage(parseInt(value));
  };

  useEffect(() => {
    const currentPageIndex = currentPages.indexOf(currentPage);

    if (currentPageIndex > 3) {
      if (currentPages.pop() !== totalPages) setStart(start + 1);
    }

    if (currentPageIndex < 1 && currentPages.shift() !== 1) setStart(start - 1);

    onPaginate(currentPage);
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <>
      <nav>
        <div className="flex justify-center my-2">
          <p className="text-lg leading-5 text-gray-700">
            Showing
            <span className="px-2 font-semibold">{from + 1}</span>
            to
            <span className="px-2 font-semibold">
              {to > totalItems ? totalItems : to}{" "}
            </span>
            of
            <span className="px-2 font-semibold">{totalItems}</span>
            results
          </p>
        </div>
        <ul className="text-lg pagination" {...rest}>
          <li className={`page-item ${currentPage === 1 && "disabled"}`}>
            <button
              style={{ boxShadow: "none" }}
              className="page-link"
              onClick={() => {
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}>
              Prev
            </button>
          </li>
          {currentPages.map((page, key) => (
            <li
              key={key}
              className={`page-item ${page === currentPage && "active"}`}>
              <button
                onClick={onClick}
                className="page-link"
                style={{ boxShadow: "none" }}>
                {page}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages && "disabled"}`}>
            <button
              style={{ boxShadow: "none" }}
              className="page-link"
              onClick={() => {
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onPaginate: PropTypes.func,
  from: PropTypes.number,
  to: PropTypes.number,
};

export default Pagination;
