import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const catRestApi = createApi({
  reducerPath: 'catRestApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1/' }),
  endpoints: builder => ({
    getCatsByBreed: builder.query<any, string>({
      query: breed => ({ url: `images/search?breed_ids=${breed}&limit=10` }),
    }),
  }),
});
