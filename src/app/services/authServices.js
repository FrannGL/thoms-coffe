import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, AUTH_BASE_URL } from "../../firebase/db.js";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({ baseUrl: AUTH_BASE_URL }),
	endpoints: builder => ({
		Signup: builder.mutation({
			query: user => ({
				url: `accounts:signUp?key=${API_KEY}`,
				method: "POST",
				body: user,
			}),
		}),
		Login: builder.mutation({
			query: user => ({
				url: `accounts:signInWithPassword?key=${API_KEY}`,
				method: "POST",
				body: user,
			}),
		}),
	}),
});

export const { useSignupMutation, useLoginMutation } = authApi;
