import React, { useState } from "react";
import styled from "styled-components";
import valueToLabel from "../common/functions/valueToLabel"

const SearchSection = styled.div`
    display: flex;
    width: calc(100% - 40px);
    flex-direction: column;
    box-sizing: border-box;
    position: fixed;
    border: 1px solid rgb(208, 212, 217);
    border-radius: 10px;
    padding: 20px;
    height: 150px;
`;

const Title = styled.div`
    width: 100%;
    height: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
`

const Search = styled.div`
    display: flex;
    height: 50%;
    background-color: white;
    margin-top: 20px;
`

const SelectBox = styled.div`
    background-color: white;
    border: 1px solid rgb(208, 212, 217);
    width: 200px;
    height: 100%;
`

const SelectedBox = styled.div`
    background-color: white;
    width: 200px;
    height: 100%;
`

const InputBox = styled.input`
    width: 200px;
    background-color: #21262C;
    border: 1px solid black;
    padding-left: 10px;
    color: #C8D1D9;
    font-size: 17px;
    font-weight: 500;
    border-radius: 10px;
`
const Button = styled.button`
    width: 20px;
    flex: 1;
    color: #C8D1D9;
    font-size: 17px;
    font-weight: 700;
    border: 1px solid;
    border-radius: 10px;
    padding: 0px 10px 0px 10px;
    background-color: transparent;
    cursor: pointer;
`

const Header = ({ searchObj, setSearchObj }) => {
    const { OptionList, title, searchOption, searchValue } = searchObj;
    const [selectBoxDisplayFlag, setSelectBoxDisplayFlag] = useState(false);

    return (
        <SearchSection>
            <Title>{title}</Title>
            <div className="middleLine"></div>
            <Search>
                <SelectBox>
                    <SelectedBox onClick={() => {
                        setSelectBoxDisplayFlag(!selectBoxDisplayFlag)
                    }}>{valueToLabel(searchOption, OptionList)} <span>{`>`}</span></SelectedBox>
                    <div style={{ display: `${selectBoxDisplayFlag == true ? "flex" : "none"}`, flexDirection: "column" }}>
                        {OptionList?.map((ele) => {
                            return (
                                <div
                                    onClick={() => {
                                        setSearchObj({ ...searchObj, searchOption: ele.value })
                                    }}>
                                    {ele.label}
                                </div>
                            )

                        })}
                    </div>
                </SelectBox>
                <InputBox
                    onChange={(event) => {
                        setSearchObj({ ...searchObj, searchValue: event.target.value })
                    }}
                    value={searchValue} />
                <Button>조회버튼</Button>
            </Search>
        </SearchSection>
    )
}

export default Header;