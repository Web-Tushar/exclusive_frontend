import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import BestSelling from './../../../Component/homePage/Bestselling/BestSelling';

// Define a service using a base URL and expected endpoints

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        GetAllProduct: builder.query({
            query: () => "/products",
        }),
        BestSellingProduct: builder.query({
            query: () => "/products/category/smartphones",
        }),
        GetAllProductCategoryList: builder.query({
            query: () => "/products/category-list"
        }),

        GetSingleProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
        GetProductBycategory: builder.query({
            query: (CategoryName) => `/products/category/${CategoryName}`,
        })
    }),
})

export const {
    useGetAllProductQuery,
    useBestSellingProductQuery,
    useGetAllProductCategoryListQuery,
    useGetSingleProductQuery,
    useGetProductBycategoryQuery,
} = productApi

