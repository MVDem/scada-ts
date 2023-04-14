import { createSlice } from '@reduxjs/toolkit';
import { IinitialState } from '../type';

const initialState: IinitialState = {
  userId: null,
  email: null,
  products: null,
  systems: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: any, action) => {
      for (let key in action.payload) {
        if (action.payload.hasOwnProperty(key)) {
          state[key] = action.payload[key];
          // console.log(action.payload[key]);
          // console.log(state[key], 'загружен в Store');
        }
        console.log('Данные о пользователе загружены в Store');
      }
    },
    setUserSystems: (state: any, action) => {
      state.systems = action.payload;
      // console.log(state.systems);
      console.log('Системы загружены в Store');
    },

    removeUser(state) {
      state.userId = null;
      state.email = null;
      state.name = null;
      state.phone = null;
      state.city = null;
      state.products = null;
    },
  },
});

export const { setUser, removeUser, setUserSystems } = userSlice.actions;

export default userSlice.reducer;
