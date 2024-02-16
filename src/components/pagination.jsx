import React from 'react';
import {useProvider} from "../provider/provider.jsx";
import {IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from "react-icons/io";

export const Pagination = () => {

    const {data, currentPage, rowsPerPage, setCurrentPage} = useProvider().get;
    const totalPages = Math.ceil(data.length / rowsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    return (
        <div className={`pagination-box`}>
            <div className={`font-poppins`}>Page: {currentPage} - {totalPages}</div>
            <div className={`space-x-4 text-[24px]`}>
                <button className={`hover:text-yellow-400`} type={`submit`} onClick={prevPage}>
                    <IoMdArrowDropleftCircle/>
                </button>
                <button className={`hover:text-yellow-400`} type={`submit`} onClick={nextPage}>
                    <IoMdArrowDroprightCircle/>
                </button>
            </div>
        </div>
    );
}
