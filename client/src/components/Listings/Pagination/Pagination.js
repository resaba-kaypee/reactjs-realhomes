import React, { useContext, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import PropertyContext from "../../../context/property/propertyContext";

const Pagination = () => {
  const location = useLocation();
  const history = useHistory();
  const propertyContext = useContext(PropertyContext);
  const { loading, nextPage, prevPage, totalResults } = propertyContext;

  const [start, setStart] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPages, setCurrentPages] = useState([]);
  const itemsPerPage = 6;

  //needed to show how many results (Showing 1{from} to 6{to} of 20{totalResults} results)
  const to = currentPage * itemsPerPage;
  const from = to - itemsPerPage + 1;

  const nextSearch = nextPage && nextPage.split("?")[1];
  const prevSearch = prevPage && prevPage.split("?")[1];
  const currentLocation = location.search.split("&");
  const page = currentLocation[currentLocation.length - 1];
  const num = parseInt(page.split("=")[1]);
  const query = currentLocation.slice(0, currentLocation.length - 1).join("&");

  useEffect(() => {
    setStart(num);
    setCurrentPage(num);
  }, [num]);

  useEffect(() => {
    if (totalResults && !loading) {
      const total = Math.ceil(totalResults / itemsPerPage);
      const pages = [];
      setTotalPages(total);

      for (let i = 0; i < total; i++) {
        pages[i] = i + 1;
      }
      setCurrentPages(pages.splice(start - 1, 5));
    }
    // eslint-disable-next-line
  }, [totalResults, loading]);

  const onPaginate = (pageNumber) => {
    // if you are on page 2 and you want to move to another page
    // also you can't select the page the you're currently on
    // set the current page to selected value
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      setStart(pageNumber);
    }

    // direct the page to selected value
    history.push(`${query}&page=${pageNumber}`);
  };

  // get the next page url from the store
  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setStart(start + 1);
    }
    history.push(`?${nextSearch}`);
  };

  // get the prev page url from the store
  const onPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setStart(start - 1);
    }
    history.push(`?${prevSearch}`);
  };

  return (
    <nav>
      <div className="flex justify-center my-2">
        <p className="text-lg leading-5 text-gray-700">
          Showing
          <span className="px-2 font-semibold">{from}</span>
          to
          <span className="px-2 font-semibold">
            {to > totalResults ? totalResults : to}{" "}
          </span>
          of
          <span className="px-2 font-semibold">{totalResults}</span>
          results
        </p>
      </div>
      <ul className="text-lg pagination">
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => onPrevPage()}
            style={{ boxShadow: "none" }}
            type="button">
            Prev
          </button>
        </li>
        {currentPages.length > 0 &&
          currentPages.map((page, key) => (
            <li
              key={key}
              className={`page-item ${page === currentPage && "active"}`}>
              <button
                onClick={() => onPaginate(page)}
                className="page-link"
                style={{ boxShadow: "none" }}
                type="button">
                {page}
              </button>
            </li>
          ))}
        <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
          <button
            className="page-link"
            onClick={() => onNextPage()}
            style={{ boxShadow: "none" }}
            type="button">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
