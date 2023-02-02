import React, { useEffect, useState } from "react";
import styled from "styled-components";

//components
import Select from "./select";

//redux
import { useSelector, useDispatch } from "react-redux";
import { setListObj } from "../redux/services/list/listSlice";

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

const Pagination = () => {
    const { listObj } = useSelector((state) => state.list)
    const { list, pageCount, start, maxPage, splitedList } = listObj
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0)
    const [pagingObj, setPagingObj] = useState({
        OptionList: [
            { value: "10", label: "10" },
            { value: "20", label: "20" },
            { value: "50", label: "50" },
        ],
        searchOption: null,
    })
    // console.log(start)
    // console.log(currentPage)
    // console.log(splitedList)
    // console.log(maxPage)

    const listSplit = () => {
        const splited = {
            key: "splited",
            splitedList: []
        };
        for (let i = 0; i < list?.length; i += pageCount) {
            splited.splitedList.push(list.slice(i, i + pageCount));
        }
        dispatch(setListObj(splited))
    }

    useEffect(() => {
        if (currentPage % pageCount === 0) {
            const equalObj = {
                key: "equal",
                currentPage: currentPage
            }
            dispatch(setListObj(equalObj))
        }
        if (currentPage !== null) {
            const notNullObj = {
                key: "notNull",
                paginglist: splitedList[currentPage]
            }
            dispatch(setListObj(notNullObj))
        }
    }, [currentPage])

    useEffect(() => {
        if (list.length > 0) {
            listSplit();
        }
    }, [list.length])

    return (
        <PaginationSection display={splitedList?.length > 0 ? true : false}>
            <Select
                selectObj={pagingObj}
                setSelectObj={setPagingObj}
            />
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