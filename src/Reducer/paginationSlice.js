// paginationSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    firstDocumentFields: {},
    lastDocumentFields: {},
    pageNumber: 1,
    categoryNum: 0,
    brandNum: 0,
  },
  reducers: {
    setFirstDocumentFields: (state, action) => {
      state.firstDocumentFields = action.payload;
    },
    setLastDocumentFields: (state, action) => {
      state.lastDocumentFields = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setCategoryNum: (state, action) => {
      state.categoryNum = action.payload;
    },
    setBrandNum: (state, action) => {
      state.brandNum = action.payload;
    },
  },
});

export const {
  setFirstDocumentFields,
  setLastDocumentFields,
  setPageNumber,
  setCategoryNum,
  setBrandNum,
} = paginationSlice.actions;

export default paginationSlice.reducer;
