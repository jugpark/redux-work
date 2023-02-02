import React from "react";
import styled from "styled-components";
import Select from "./select";

const SearchSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid rgb(208, 212, 217);
    border-radius: 10px;
    padding: 20px;
    height: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    background-color: white;
`;

const Title = styled.div`
    width: 100%;
    height: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    padding-left: 10px;
`

const Search = styled.div`
    display: flex;
    height: 50%;
    background-color: white;
    margin-top: 20px;
`

const InputBox = styled.input`
    width: 400px;
    background-color: white;
    border: 1px solid rgb(208, 212, 217);
    padding-left: 10px;
    color: black;
    font-size: 17px;
    font-weight: 500;
    border-radius: 10px;
    margin-left: 20px;
`
const Button = styled.button`
    width: 70px;
    color: #C8D1D9;
    font-size: 17px;
    font-weight: 700;
    border: 1px solid;
    border-radius: 10px;
    padding: 0px 10px 0px 10px;
    background-color: black;
    cursor: pointer;
    margin-left: 20px;
`

const Header = ({ searchObj, setSearchObj, fetchList }) => {
    const { title, searchValue } = searchObj;

    console.log(searchObj)

    return (
        <SearchSection>
            <Title>{title}</Title>
            <div className="middleLine"></div>
            <Search>
                <Select 
                    selectObj={searchObj}
                    setSelectObj={setSearchObj}
                />
                <InputBox
                    onChange={(event) => {
                        setSearchObj({ ...searchObj, searchValue: event.target.value })
                    }}
                    value={searchValue} />
                <Button 
                onClick={() => {
                    fetchList();
                }}
                >조회</Button>
            </Search>
        </SearchSection>
    )
}

export default Header;