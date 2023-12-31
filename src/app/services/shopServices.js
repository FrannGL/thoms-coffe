import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
	reducerPath: "shopApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://thom-s-coffe-default-rtdb.firebaseio.com/" }),
	endpoints: builder => ({
		getProducts: builder.query({
			query: () => "products.json",
		}),
		getProductById: builder.query({
			query: id => `products/${id}.json`,
		}),
		getProductsByCategory: builder.query({
			query: category => `products.json?orderBy="category"&equalTo="${category}"`,
		}),
		getCategories: builder.query({
			query: () => "categories.json",
		}),
		postOrders: builder.mutation({
			query: order => ({
				url: "orders.json",
				method: "POST",
				body: order,
			}),
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useGetProductsByCategoryQuery,
	useGetCategoriesQuery,
	usePostOrdersMutation,
} = shopApi;
