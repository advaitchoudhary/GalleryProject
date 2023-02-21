import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import React from 'react'
import { images } from '../Models/images'

export const imagesApi = createApi({
    reducerPath: 'imagesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://agencyanalytics-api.vercel.app/' }),
    endpoints: (builder) => ({
      getImages: builder.query<images[], any>({
        query:({}:{})=>({
            url:'images.json',
            method:'GET',
        })
      }),
    }),
  })

  export const  {useGetImagesQuery} = imagesApi