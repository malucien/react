import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchPartners = createAsyncThunk(
  'partnebr/fetchPartners',
  async () => {
    const response = await fetch(baseUrl + 'partners');
    if (!response.ok) {
      return Promise.reject('Unable to fetch, status:' + response.status);
    }
    const data = await response.json();
    return data;
  }
)

const initialState = {
  partnersArray: [],
  isLoading: true,
  errMsg:'',
  extraReducers: {
    [fetchPartner.pending]: (state) => {
      state.isLoading = false;
      state.errMsg = '';
      state.partnersArray = mapImageURL(action.payload);
    },
    [fetchPartner.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed';
    }
  }
};

const partnersSlice = createSlice({
  name:"partners",
  initialState
});

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) =>{
   return state.partners.partnersArray;
};

export const selectFeaturedPartner = () => {
  return PARTNERS.find((partner) => partner.featured);
};



