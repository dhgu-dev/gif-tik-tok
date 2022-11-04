import {
  createEntityAdapter,
  createSlice,
  EntityId,
  EntityState,
} from '@reduxjs/toolkit';
import type { RootState } from '../../store/index';

interface Comment {
  id: EntityId;
  gif: EntityId;
  user: EntityId;
  content: string;
}

interface AsyncState {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: null | string;
}

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});

const initialState: EntityState<Comment> & AsyncState =
  commentsAdapter.getInitialState({
    status: 'idle',
    error: null,
  });

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers() {},
});

export default commentsSlice.reducer;

export const { selectById } = commentsAdapter.getSelectors<RootState>(
  (state) => state.comments
);
