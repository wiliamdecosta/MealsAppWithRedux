import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState:{
        ids:[]
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.theId);
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.theId),1);
        },
    },
});

export const addFavorite  = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;