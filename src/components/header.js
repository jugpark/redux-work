import React, { useState } from "react";
import styled from "styled-components";
import valueToLabel from "../common/functions/valueToLabel"

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

const Select = styled.div`
    background-color: white;
    width: 150px;
    height: 100%;
`

const SelectedBox = styled.div`
    background-color: white;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
    justify-content: center;
    border: 1px solid rgb(208, 212, 217);
    border-radius: 10px;
`

const DropdownList = styled.div`
    ${({ display }) => {
        return display ? `display: flex` : `display: none`
    }};
    flex-direction: column;
    position: absolute;
    font-size: 17px;
    font-weight: 500;
    justify-content: center;
    width: 150px;
`

const DropdownBox = styled.div`
    padding: 10px;
    display: flex;
    border-radius: 10px;
    border: 1px solid rgb(208, 212, 217);
    background-color: white;
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
    const { OptionList, title, searchOption, searchValue } = searchObj;
    const [dropDownListDisplayFlag, setDropDownListDisplayFlag] = useState(false);

    return (
        <SearchSection>
            <Title>{title}</Title>
            <div className="middleLine"></div>
            <Search>
                <Select>
                    <SelectedBox
                        onClick={() => {
                            setDropDownListDisplayFlag(!dropDownListDisplayFlag)
                        }}>{valueToLabel(searchOption, OptionList)} <span style={{ marginLeft: 20 }}>{!dropDownListDisplayFlag ? "▿" : "▵"}</span>
                    </SelectedBox>
                    <DropdownList display={dropDownListDisplayFlag}>
                        {OptionList?.map((ele, idx) => {
                            return (
                                <DropdownBox
                                    key={idx}
                                    onClick={() => {
                                        setSearchObj({ ...searchObj, searchOption: ele.value })
                                    }}>
                                    {ele.label}
                                </DropdownBox>
                            )

                        })}
                    </DropdownList>
                </Select>
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