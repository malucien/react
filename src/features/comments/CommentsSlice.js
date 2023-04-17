import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';



export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    const response = await fetch(baseUrl + 'comments');
    if (!response.ok) {
      throw new Error('Error ' + response.status + ': ' + response.statusText);
    }
    const data = await response.json();
    return data;
  }
);

export const postComment = createAsyncThunk(
  'comments/postComment',
  async (comment, { dispatch }) => {
    const response = await fetch(baseUrl + 'comments', {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    const data = await response.json();
    dispatch(addComment(data));
  }
);


const initialState = {
  commentsArray: [],
  isLoading: true,
  errMsg: ''
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    isLoading: true,
    errMsg:'',
    commentsArray:[]
  },
  reducers: {
    addComment: (state, action) => {
      state.commentsArray.push(action.payload)
    }
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg ='';
      state.commentsArray = mapImageURL(action.payload);
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message: 'Fetch failed';
    },
    [fetchComments.rejected]: (state, action) => {
      alert('Your comment could not be posted\nError:' + action.payload);
    }
  }
});

export const { addComment } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;

export const selectAllComments = (state) => {
  return state.comments.commentsArray;
}

export const selectCommentsByCampsiteId = (campsiteId)=> (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};