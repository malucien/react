import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import {PROMOTIONS} from '../../app/shared/PROMOTIONS';

export const selectFeaturedPromotion = (state) => {
  return PROMOTIONS.find((promotion) => promotion.featured);
};