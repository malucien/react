import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import {mapImageURL} from '../../utils/mapImageURL';

export const fetchCampsites = createAsyncThunk(
  'campsites/fetchCampsite',
  async () => {
    const response = await fetch(baseUrl + 'campsite');
  }
)


const initialState = {
  campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
  name:'campsites',
  initialState
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
    );
}

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
}