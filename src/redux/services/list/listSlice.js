import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    totalcount: 0,

}

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
        setTotalCount: (state, action) => {
            state.totalcount = action.payload;
        }
    }
})


export const { setList, setTotalCount } = listSlice.actions;

export default listSlice.reducer;