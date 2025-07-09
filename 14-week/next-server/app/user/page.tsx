// 'use client'
// // client side rensering
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const User = () => {
//   const [loading, setLoading] = useState(true)
//   const [data, setData] = useState({
//     name: '',
//     email: ''
//   })
//   const [error, setError] = useState('')

//   useEffect(() => {
//     axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
//       .then((response) => {
//         setData(response.data)
//         setLoading(false)
//       })
//       .catch((err) => {
//         setError('Failed to fetch user details')
//         setLoading(false)
//       })
//   }, [])

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div style={{ color: 'red' }}>{error}</div>
//   }

//   return (
//     <div>
//       <h2>User Details</h2>
//       <div>
//         <strong>Name:</strong> {data.name || 'N/A'}
//         <br />
//         <strong>Email:</strong> {data.email || 'N/A'}
//       </div>
//     </div>
//   )
// }

// export default User


// server side rendering
// import axios from 'axios'

// async function fetchData() {
//   // const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
//   const response = await axios.get('http://localhost:3000/api/user')
//   return response.data
// }
// const User = async () => {
//   const data = await fetchData()

//   return (
//     <div>
//       <h2>User Details</h2>
//       <div>
//         <strong>Name:</strong> {data.name || 'N/A'}
//         <br />
//         <strong>Email:</strong> {data.email || 'N/A'}
//       </div>
//     </div>
//   )
// }

// export default User


// import axios from "axios"

// // Asynchronous components -> New way of fetching data in Next.js(SSR)
// // loading.tsx is shown till the data is fetched(Only for SSR)
// export default async function User(){
//     const data = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
//     return (
//         <div>
//             {data.data.name}
//              {data.data.email}
//         </div>
//     )
// }



import client from "@/db"

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
    return {
      email: user?.email,
      password: user?.password,
    };
  } catch (e) {
    console.log(e);
  }
}

export default async function User() {
  const data = await getUserDetails();
  return (
    <div>
      {data?.email}
      {data?.password}
    </div>
  );
}
