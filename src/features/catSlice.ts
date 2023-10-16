import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { CatCardProps } from '../components/CatCard.tsx';

export type CatStateProps = {
  catCardList: CatCardProps[];
};

export const initialState: CatStateProps = {
  catCardList: [],
};

export const catSlice: Slice<CatStateProps> = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    setCatCardList: (state, action: PayloadAction<CatCardProps[]>) => {
      state.catCardList = action.payload;
    },
  },
});
