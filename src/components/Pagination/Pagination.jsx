import React from 'react'
import style from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';

const Pagination = ({ onChangePage }) => {
    return (
        <ReactPaginate
            className={style.paginate}
            breakLabel="..."
            nextLabel=">"
            previousLabel="< "
            onPageChange={e => onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            renderOnZeroPageCount={null}
        />
    )
}
export default Pagination