import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/CommentsSlice';
import { partnersReducer } from '../features/partners/PartnersSlice';
import { promotionsReducer } from '../features/promotions/PromotionsSlice';
import { userReducer } from '../features/user/UserSlice';


export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    user: userReducer,
  }
});
