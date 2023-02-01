import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PaginationSection = styled.div`
    ${({ display }) => {
        return display ? `display: flex` : `display: none`
    }};
    border-top: 1px solid rgb(208, 212, 217);
    justify-content: center;
    margin-bottom: 20px;
    padding: 20px;
`;

const Button = styled.button`
    ${({ display }) => {
        return display ? `display: flex` : `display: none`
    }};
    background-color: transparent;
    color: rgb(208, 212, 217);
    border: 0;
    ${({ current }) => {
        return current ? `border-bottom: 1px solid black; color: black;` : null;
    }}
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    padding: 10px;
    align-items: center;
`;

const Pagination = ({ listObj, setListObj }) => {
    const { list, pagingSize, pageCount, start, maxPage, splitedList } = listObj
    const [currentPage, setCurrentPage] = useState(0)
    console.log(start)
    console.log(currentPage)
    console.log(splitedList)
    console.log(maxPage)

    const listSplit = () => {
        const splitedArray = [];

        for (let i = 0; i < list?.length; i += pagingSize) {
            splitedArray.push(list.slice(i, i + pagingSize));
        }
        setListObj({ ...listObj, splitedList: splitedArray, paginglist: splitedArray[0], maxPage: splitedArray.length })
    }

    useEffect(() => {
        if (currentPage % pageCount === 0) {
            setListObj({ ...listObj, start: currentPage })
        }
        if (currentPage !== null) {
            setListObj({ ...listObj, paginglist: splitedList[currentPage] })
        }
    }, [currentPage])

    useEffect(() => {
        if (list.length > 0) {
            listSplit();
        }
    }, [list.length])

    return (
        <PaginationSection display={splitedList?.length > 0 ? true : false}>
            <Button display={start !== 0 ? true : false} onClick={() => { setCurrentPage(start - pageCount) }}>{`<`}</Button>
            {Array(pageCount).fill().map((value, index) => {
                return (
                    <Button current={currentPage === start + index ? true : false} display={start + index + 1 <= maxPage ? true : false} onClick={() => { setCurrentPage(start + index) }}>{start + index + 1}</Button>
                )
            })}
            <Button display={start + 1 < maxPage ? true : false} onClick={() => { setCurrentPage(start + pageCount) }}>{`>`}</Button>
        </PaginationSection>
    );
};

export default Pagination;