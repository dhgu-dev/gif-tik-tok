import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityId,
  EntityState,
} from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../../store/index';

interface User {
  id: EntityId;
  image: string;
  name: string;
  email: string;
  description: string;
  follower: number;
  following: EntityId[];
  like: number;
}

interface AsyncState {
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: null | string;
}

const usersAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

const initialState: EntityState<User> & AsyncState =
  usersAdapter.getInitialState({
    status: 'idle',
    error: null,
  });

export const fetchAllUsers = createAsyncThunk<User[], void>(
  'users/fetchAllUsers',
  async () => {
    const { data } = await axios.get<{ users: User[] }>(
      'https://dummyjson.com/users',
      {
        withCredentials: true,
      }
    );
    return data.users;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      usersAdapter.setAll(state, action.payload);
    });
  },
});

export default usersSlice.reducer;

export const { selectById: selectByUserId, selectAll: selectAllUsers } =
  usersAdapter.getSelectors<RootState>((state) => state.users);
