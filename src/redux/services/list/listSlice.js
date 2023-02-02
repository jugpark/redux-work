import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listObj: {
        list: [],
        paginglist: [],
        maxPage: 0,
        splitedList: [],
        columns: ["상품번호", "상품명", "브랜드", "상품내용", "가격", "평점", "재고"],
        pageCount: 10,
        start: 0,
    },
}

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        setListObj: (state, action) => {
            console.log(action)
            if (action.payload.key === "list") {
                state.listObj.list = action.payload.list;
            } else if (action.payload.key === "filtered") {
                state.listObj.list = action.payload.list;
            } else if (action.payload.key === "splited") {
                state.listObj.splitedList = action.payload.splitedList;
                state.listObj.paginglist = action.payload.splitedList[0];
                state.listObj.maxPage = action.payload.splitedList.length;
            } else if (action.payload.key === "equal") {
                state.listObj.start = action.payload.currentPage;
            } else if (action.payload.key === "notNull") {
                state.listObj.paginglist = action.payload.paginglist;
            }
        },
    }
})


export const { setListObj } = listSlice.actions;

export default listSlice.reducer;