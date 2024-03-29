import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
	reducerPath: "shopApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://thom-s-coffe-default-rtdb.firebaseio.com/" }),
	tagTypes: ["image", "location", "orders"],
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
			invalidatesTags: ["orders"],
		}),
		getOrders: builder.query({
			query: () => "orders.json",
			providesTags: ["orders"],
		}),
		postProfile: builder.mutation({
			query: ({ localId, image }) => ({
				url: `profileImage/${localId}.json`,
				method: "PUT",
				body: { image },
			}),
			invalidatesTags: ["image"],
		}),
		postUserLocation: builder.mutation({
			query: ({ localId, locationFormatted }) => ({
				url: `userLocation/${localId}.json`,
				method: "PUT",
				body: locationFormatted,
			}),
			invalidatesTags: ["location"],
		}),
		getProfile: builder.query({
			query: localId => `profileImage/${localId}.json`,
			providesTags: ["image"],
		}),
		getUserLocation: builder.query({
			query: localId => `userLocation/${localId}.json`,
			providesTags: ["location"],
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useGetProductsByCategoryQuery,
	useGetCategoriesQuery,
	useGetUserLocationQuery,
	usePostOrdersMutation,
	useGetOrdersQuery,
	usePostProfileMutation,
	usePostUserLocationMutation,
	useGetProfileQuery,
} = shopApi;
