import React from "react";
import styled from "styled-components";

//redux
import { useSelector } from "react-redux";

const Table = styled.div`
    width: 100%;
    height: calc(100vh - 300px);
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow-y: hidden;
    box-sizing: border-box;
    border: 1px solid rgb(208, 212, 217);
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;
    }
`;

const ColumnHeader = styled.div`
    display: flex;
    height: 50px;
    width: 100%;
`

const Column = styled.div`
    ${({ description }) => {
        return description ? `text-overflow: ellipsis; white-space: nowrap; overflow: hidden;` : ``
    }};
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(208, 212, 217);
`

const List = () => {
    const { listObj } = useSelector((state) => state.list)
    const { paginglist, columns } = listObj

    return (
        <Table>
            <ColumnHeader>
                {columns?.map((ele) => {
                    return (
                        <Column>{ele}</Column>
                    )
                })}
            </ColumnHeader>
            {paginglist?.map((item) => {
                return (
                    <ColumnHeader>
                        <Column>{item.id}</Column>
                        <Column>{item.title}</Column>
                        <Column>{item.brand}</Column>
                        <Column description={true}>{item.description}</Column>
                        <Column>{item.price}</Column>
                        <Column>{item.rating}</Column>
                        <Column>{item.stock}</Column>
                    </ColumnHeader>
                )
            })}
        </Table>
    )
}

export default List;