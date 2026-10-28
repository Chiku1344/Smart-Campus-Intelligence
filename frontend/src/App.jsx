// // import { useState } from 'react'
// // import heroImg from './assets/hero.png'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <section id="center">
// //         <div className="hero">
// //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// //           <img src={reactLogo} className="framework" alt="React logo" />
// //           <img src={viteLogo} className="vite" alt="Vite logo" />
// //         </div>
// //         <div>
// //           <h1>Get started</h1>
// //           <p>
// //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// //           </p>
// //         </div>
// //         <button
// //           type="button"
// //           className="counter"
// //           onClick={() => setCount((count) => count + 1)}
// //         >
// //           Count is {count}
// //         </button>
// //       </section>

// //       <div className="ticks"></div>

// //       <section id="next-steps">
// //         <div id="docs">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#documentation-icon"></use>
// //           </svg>
// //           <h2>Documentation</h2>
// //           <p>Your questions, answered</p>
// //           <ul>
// //             <li>
// //               <a href="https://vite.dev/" target="_blank">
// //                 <img className="logo" src={viteLogo} alt="" />
// //                 Explore Vite
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://react.dev/" target="_blank">
// //                 <img className="button-icon" src={reactLogo} alt="" />
// //                 Learn more
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div id="social">
// //           <svg className="icon" role="presentation" aria-hidden="true">
// //             <use href="/icons.svg#social-icon"></use>
// //           </svg>
// //           <h2>Connect with us</h2>
// //           <p>Join the Vite community</p>
// //           <ul>
// //             <li>
// //               <a href="https://github.com/vitejs/vite" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#github-icon"></use>
// //                 </svg>
// //                 GitHub
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://chat.vite.dev/" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#discord-icon"></use>
// //                 </svg>
// //                 Discord
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://x.com/vite_js" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#x-icon"></use>
// //                 </svg>
// //                 X.com
// //               </a>
// //             </li>
// //             <li>
// //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// //                 <svg
// //                   className="button-icon"
// //                   role="presentation"
// //                   aria-hidden="true"
// //                 >
// //                   <use href="/icons.svg#bluesky-icon"></use>
// //                 </svg>
// //                 Bluesky
// //               </a>
// //             </li>
// //           </ul>
// //         </div>
// //       </section>

// //       <div className="ticks"></div>
// //       <section id="spacer"></section>
// //     </>
// //   )
// // }

// // export default App
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [message, setMessage] = useState('');
//   const [students, setStudents] = useState([]);

//   // Backend se connect karke data laane ke liye
//   useEffect(() => {
//     // FastAPI home route check karo
//     axios.get('http://127.0.0.1:8000/')
//       .then(response => {
//         setMessage(response.data.message);
//       })
//       .catch(error => {
//         console.error("Backend connection error:", error);
//         setMessage("Backend is offline or not connected.");
//       });

//     // Students list fetch karo
//     axios.get('http://127.0.0.1:8000/students')
//       .then(response => {
//         setStudents(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching students:", error);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
//       <div className="max-w-4xl mx-auto">
//         <header className="mb-8 text-center">
//           <h1 className="text-3xl font-bold text-purple-700">Smart Campus Intelligence Dashboard</h1>
//           <p className="text-gray-600 mt-2">Backend Status: <span className="font-semibold text-green-600">{message || "Connecting..."}</span></p>
//         </header>

//         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">Registered Students ({students.length})</h2>
//           {students.length === 0 ? (
//             <p className="text-gray-500">No students found or database is empty. Add some via Swagger!</p>
//           ) : (
//             <ul className="divide-y divide-gray-200">
//               {students.map((student) => (
//                 <li key={student.id} className="py-3 flex justify-between items-center">
//                   <div>
//                     <p className="font-medium text-gray-800">{student.name} ({student.department})</p>
//                     <p className="text-sm text-gray-500">{student.email} - Year {student.year}</p>
//                   </div>
//                   <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">ID: {student.id}</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const API_BASE_URL = "http://127.0.0.1:8000";

function App() {
  const [data, setData] = useState({ students: [], canteen: [], energy: [] });
  const [loading, setLoading] = useState({ students: true, canteen: true, energy: true });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const endpoints = { students: '/students', canteen: '/canteen', energy: '/energy' };

    const fetchRecords = async ([resource, endpoint]) => {
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Request failed (${response.status})`);
        }

        const records = await response.json();
        if (!Array.isArray(records)) {
          throw new Error('Expected an array response from the API');
        }

        setData(current => ({ ...current, [resource]: records }));
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error(`Error fetching ${resource}:`, error);
          setErrors(current => ({ ...current, [resource]: error.message }));
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(current => ({ ...current, [resource]: false }));
        }
      }
    };

    Promise.all(Object.entries(endpoints).map(fetchRecords));
    return () => controller.abort();
  }, []);

  const isLoading = Object.values(loading).some(Boolean);
  const hasErrors = Object.keys(errors).length > 0;
  const { students, canteen, energy } = data;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <header style={{ marginBottom: '20px', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
        <h1 style={{ margin: 0, color: '#2c3e50' }}>🎓 Smart Campus Intelligence Dashboard</h1>
        <p style={{ color: hasErrors ? '#c0392b' : '#27ae60', margin: '5px 0 0 0', fontWeight: 'bold' }}>
          {isLoading ? '🟡 API Status: Loading campus data...' : hasErrors ? '🔴 API Status: Some requests failed' : '🟢 API Status: Connected to FastAPI Backend'}
        </p>
      </header>

      <div>
          {/* Top Summary Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3>👥 Total Students</h3>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#3498db' }}>{loading.students ? '...' : errors.students ? '—' : students.length}</p>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3>⚡ Total Energy Logs</h3>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#e74c3c' }}>{loading.energy ? '...' : errors.energy ? '—' : energy.length}</p>
            </div>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3>🍱 Canteen Records</h3>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#27ae60' }}>{loading.canteen ? '...' : errors.canteen ? '—' : canteen.length}</p>
            </div>
          </div>

          {/* Charts Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            
            {/* Energy Consumption Chart */}
            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3>⚡ Energy Consumption (kWh)</h3>
              {loading.energy ? <p>Loading energy records...</p> : errors.energy ? <p role="alert">Could not load energy records: {errors.energy}</p> : energy.length === 0 ? <p>No energy data available</p> : (
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={energy}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="id" label={{ value: 'Log ID', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
                    <Tooltip labelFormatter={(id) => {
                      const record = energy.find(item => item.id === Number(id));
                      return record ? `Log ${id} · ${new Date(record.timestamp).toLocaleString()}` : `Log ${id}`;
                    }} />
                    <Line type="monotone" dataKey="power_consumed_kwh" stroke="#e74c3c" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Canteen Food Waste Chart */}
            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <h3>🍱 Canteen Prepared vs Wasted</h3>
              {loading.canteen ? <p>Loading canteen records...</p> : errors.canteen ? <p role="alert">Could not load canteen records: {errors.canteen}</p> : canteen.length === 0 ? <p>No canteen data available</p> : (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={canteen}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="item_name" />
                    <YAxis label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="quantity_prepared" fill="#3498db" name="Prepared" />
                    <Bar dataKey="quantity_wasted" fill="#e74c3c" name="Wasted" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;