import { combineReducers, configureStore,createSlice } from '@reduxjs/toolkit'
import { imagesApi } from '../Services/operations.api'
import { images } from '../Models/images'
import { favourite } from '../utils/utils'
import { FavReducer, favStore } from '../Services/favStore.slice'
const reducers = combineReducers({

    [imagesApi.reducerPath]: imagesApi.reducer,
    favReducer:FavReducer
})


export const store = configureStore({
    reducer: reducers,
    middleware: (gDM) =>
      gDM({ serializableCheck: false }).concat(
        imagesApi.middleware,
      ),
  })
  export type AppDispatch = typeof store.dispatch
  export type RootState = ReturnType<typeof store.getState>
