import { createSlice } from '@reduxjs/toolkit';

interface IinitialState {
  email: string | null;
  token: string | null;
  userId: string | null;
  name: string | null;
}

const initialState: IinitialState = {
  email: null,
  token: null,
  userId: null,
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: any, action) => {
      for (let key in action.payload) {
        if (action.payload.hasOwnProperty(key)) {
          console.log(action.payload);
          state[key] = action.payload[key];
        }
      }
    },

    removeUser(state) {
      state.email = null;
      state.token = null;
      state.userId = null;
      state.name = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
