import { createSlice } from '@reduxjs/toolkit';

interface MarvelState {

    name: string;
    description: string;
    super_power: string;
    comics_appeared_in: number;
    image_url: string;
}

const initialState: MarvelState = {
    name: '',
    description: '',
    super_power: '',
    comics_appeared_in: 0,
    image_url: ''
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        chooseSuperPower: (state, action) => { state.super_power = action.payload },
        chooseComicsAppearedIn: (state, action) => { state.comics_appeared_in = action.payload },
        chooseImageUrl: (state, action) => { state.image_url = action.payload }
    }
});

export const { 
    chooseName, 
    chooseDescription, 
    chooseSuperPower, 
    chooseComicsAppearedIn, 
    chooseImageUrl 
} = rootSlice.actions;

export const reducer = rootSlice.reducer;