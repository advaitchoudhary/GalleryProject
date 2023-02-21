import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { images } from '../Models/images'



// Action creators are generated for each case reducer function


const initialStateValue:images[]=[]
export const favStore = createSlice({
    name: "favStore",
    initialState: { value: initialStateValue },
    reducers: {
      setFavourites: (state, action:PayloadAction<images>) => {
        state.value=[...state.value,action.payload]
      },
      
    },
  });

  const { reducer } = favStore
const { setFavourites } = favStore.actions

export { reducer as FavReducer, setFavourites }