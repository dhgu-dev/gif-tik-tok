import {
  createEntityAdapter,
  createSlice,
  EntityId,
  EntityState,
} from '@reduxjs/toolkit';
import type { RootState } from '../../store/index';

interface Gif {
  id: EntityId;
  src: string;
  poster: string;
  user: EntityId;
  title: string;
  like: number;
  Comments: EntityId[];
  view: string;
  datetime: string;
}

interface AsyncState {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: null | string;
}

const gifsAdapter = createEntityAdapter<Gif>({
  selectId: (gif) => gif.id,
  sortComparer: (a, b) => Date.parse(a.datetime) - Date.parse(b.datetime),
});

const initialState: EntityState<Gif> & AsyncState = gifsAdapter.getInitialState(
  {
    status: 'idle',
    error: null,
  }
);

const gifsSlice = createSlice({
  name: 'gifs',
  initialState,
  reducers: {},
  extraReducers() {},
});

export default gifsSlice.reducer;

export const { selectById } = gifsAdapter.getSelectors<RootState>(
  (state) => state.gifs
);
