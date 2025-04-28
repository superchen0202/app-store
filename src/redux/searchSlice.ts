import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type FilteredResultType = {
  keyword: string;
};

const initialState: FilteredResultType = {
  keyword: '',
};

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setKeyword } = searchSlice.actions;

export default searchSlice.reducer;
