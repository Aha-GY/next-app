// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { get } from 'http';




// export const jobsApi = createApi ({

//     reduerpath: 'jobs',
  
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://akil-backend.onrender.com//opportunities/search' }),
  
//     endpoints: (builder) => ({
  
//       getAllJobs: builder.query({
  
//         query: () => ' /opportunities/search',
//       }),


//       getJobById: builder.query({
          
//           query: (id) => ` /opportunities/search//opportunities/:id${id}`,
//         }),                                                      
//     }),
//   });
  
//   export const { usegetAllJobsQuery , usegetJobById} = jobsApi;
  