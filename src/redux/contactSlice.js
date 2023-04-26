import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    array: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: (state, actions) => {
      state.array.push(actions.payload);
    },
    removeContact: (state, actions) => {
      const index = state.array.findIndex(task => task.id === actions.payload);
      state.array.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
