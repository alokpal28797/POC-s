import { configureStore } from '@reduxjs/toolkit';
import ImgSlice from './Slice/imgSlice';


const store = configureStore({
	reducer: {
		img : ImgSlice.reducer
	},
});

export default store;
