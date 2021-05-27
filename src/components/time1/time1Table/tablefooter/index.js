import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export function TableFooter({ data, setData }) {
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const setTableData = () => {
    const slice = data?.slice(offset, offset + perPage);
    setData(slice);
    setPageCount(Math.ceil(data.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    setTableData();
  }, [offset]);

  return (
    <div className="row mb-100 mt-10">
      <div className="col-lg-12 d-flex justify-content-center">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
