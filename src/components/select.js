import React, { useState } from "react";
import styled from "styled-components";
import valueToLabel from "../common/functions/valueToLabel"

const SelectBox = styled.div`
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
const Select = ({ selectObj, setSelectObj }) => {
    const { OptionList, searchOption } = selectObj;
    const [dropDownListDisplayFlag, setDropDownListDisplayFlag] = useState(false);

    return (
        <SelectBox>
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
                                setSelectObj({ ...selectObj, searchOption: ele.value });
                                setDropDownListDisplayFlag(false)
                            }}>
                            {ele.label}
                        </DropdownBox>
                    )

                })}
            </DropdownList>
        </SelectBox>
    )
}

export default Select;