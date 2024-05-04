import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apollo-emajohn-backend.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["products", "users", "books"],
});
