// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const SignupLogin = () => {
// //     const [isBuyer, setIsBuyer] = useState(true);
// //     const [isSignup, setIsSignup] = useState(true);
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         password: ''
// //     });

// //     const navigate = useNavigate();

// //     // Handle Input Changes
// //     const handleChange = (e) => {
// //         setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value
// //         });
// //     };

// //     // Handle Form Submission
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const endpoint = isSignup
// //             ? isBuyer ? '/user/signup' : '/business/signup'
// //             : isBuyer ? '/user/login' : '/business/login';

// //         try {
// //             const response = await axios.post(`http://localhost:3001${endpoint}`, formData);
// //             if (response.status === 200) {
// //                 localStorage.setItem('token', response.data.token);
// //                 navigate(isBuyer ? '/' : '/CategoryAd');
// //                 console.log(response.data.message);
// //             }
// //         } catch (error) {
// //             console.error(error);
// //         }

// //         // Reset Form
// //         setFormData({ name: '', email: '', password: '' });
// //     };

// //     return (
// //         <div className="flex flex-col items-center mt-5">
// //             {/* Toggle Account Type */}
// //             <div className="relative flex bg-gray-200 rounded-2xl p-1 w-80">
// //                 <div
// //                     className="absolute top-1 bottom-1 bg-gray-700 rounded-2xl transition-all duration-300"
// //                     style={{ width: "50%", left: isBuyer ? "0%" : "50%" }}
// //                 ></div>
// //                 <button
// //                     className={`relative z-10 w-1/2 py-2 font-bold transition-colors duration-300 ${isBuyer ? "text-white" : "text-black"}`}
// //                     onClick={() => setIsBuyer(true)}
// //                 >
// //                     Personal
// //                 </button>
// //                 <button
// //                     className={`relative z-10 w-1/2 py-2 font-bold transition-colors duration-300 ${!isBuyer ? "text-white" : "text-black"}`}
// //                     onClick={() => setIsBuyer(false)}
// //                 >
// //                     Business
// //                 </button>
// //             </div>

// //             {/* Signup/Login Form */}
// //             <div className="w-full max-w-md bg-white rounded-lg shadow-md mt-5 p-6">
// //                 <h1 className="text-xl font-bold text-gray-900 text-center">
// //                     {isSignup ? (isBuyer ? "Sign up for Personal Account" : "Sign up for Business Account")
// //                              : "Login to Your Account"}
// //                 </h1>
// //                 <form onSubmit={handleSubmit} className="space-y-4 mt-4">
// //                     {isSignup && (
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">
// //                                 {isBuyer ? "Your Name" : "Business Name"}
// //                             </label>
// //                             <input
// //                                 required
// //                                 name="name"
// //                                 value={formData.name}
// //                                 onChange={handleChange}
// //                                 type="text"
// //                                 className="w-full p-2 border border-gray-300 rounded-md"
// //                                 placeholder={isBuyer ? "John Doe" : "Business XYZ"}
// //                             />
// //                         </div>
// //                     )}
// //                     <div>
// //                         <label className="block text-sm font-medium text-gray-700">Email</label>
// //                         <input
// //                             required
// //                             name="email"
// //                             value={formData.email}
// //                             onChange={handleChange}
// //                             type="email"
// //                             className="w-full p-2 border border-gray-300 rounded-md"
// //                             placeholder="name@example.com"
// //                         />
// //                     </div>
// //                     <div>
// //                         <label className="block text-sm font-medium text-gray-700">Password</label>
// //                         <input
// //                             required
// //                             name="password"
// //                             value={formData.password}
// //                             onChange={handleChange}
// //                             type="password"
// //                             className="w-full p-2 border border-gray-300 rounded-md"
// //                             placeholder="••••••••"
// //                         />
// //                     </div>
// //                     <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md">
// //                         {isSignup ? "Sign Up" : "Login"}
// //                     </button>
// //                     <p className="text-sm text-gray-500 text-center">
// //                         {isSignup ? "Already have an account?" : "Don't have an account?"} 
// //                         <button onClick={() => setIsSignup(!isSignup)} className="text-blue-600 underline">
// //                             {isSignup ? "Login" : "SignUp"}
// //                         </button>
// //                     </p>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SignupLogin;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const SignupLogin = () => {
// //     const [isBuyer, setIsBuyer] = useState(true);
// //     const [isSignup, setIsSignup] = useState(true);
// //     const [isAdmin, setIsAdmin] = useState(false);

// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         password: ''
// //     });

// //     const [adminData, setAdminData] = useState({
// //         aemail: '',
// //         apassword: ''
// //     });

// //     const navigate = useNavigate();

// //     const handleChange = (e) => {
// //         if (isAdmin) {
// //             setAdminData({
// //                 ...adminData,
// //                 [e.target.name]: e.target.value
// //             });
// //         } else {
// //             setFormData({
// //                 ...formData,
// //                 [e.target.name]: e.target.value
// //             });
// //         }
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         if (isAdmin) {
// //             try {
// //                 const response = await axios.post('http://localhost:3002/admin/login', {
// //                     aemail: adminData.aemail,
// //                     apassword: adminData.apassword
// //                 });

// //                 if (response.status === 200) {
// //                     localStorage.setItem('token', response.data.token);
// //                     console.log("Admin logged in successfully");
// //                     navigate('/AdminDashboard');
// //                 }
// //             } catch (error) {
// //                 console.error("Admin login error:", error);
// //             }

// //             setAdminData({ aemail: '', apassword: '' });
// //         } else {
// //             const endpoint = isSignup
// //                 ? isBuyer ? '/user/signup' : '/business/signup'
// //                 : isBuyer ? '/user/login' : '/business/login';

// //             try {
// //                 const response = await axios.post(`http://localhost:3002${endpoint}`, formData);
// //                 if (response.status === 200) {
// //                     localStorage.setItem('token', response.data.token);
// //                     navigate(isBuyer ? '/' : '/CategoryAd');
// //                     console.log(response.data.message);
// //                 }
// //             } catch (error) {
// //                 console.error(error);
// //             }

// //             setFormData({ name: '', email: '', password: '' });
// //         }
// //     };

// //     return (
// //         <div className="flex flex-col items-center mt-5">
// //             {/* Admin Toggle */}
// //             <div className="mb-4">
// //                 <label className="mr-2 font-medium text-gray-700">Admin Login?</label>
// //                 <input
// //                     type="checkbox"
// //                     checked={isAdmin}
// //                     onChange={() => setIsAdmin(!isAdmin)}
// //                     className="w-4 h-4"
// //                 />
// //             </div>

// //             {/* Account Type Switcher (only for user/business) */}
// //             {!isAdmin && (
// //                 <div className="relative flex bg-gray-200 rounded-2xl p-1 w-80 mb-5">
// //                     <div
// //                         className="absolute top-1 bottom-1 bg-gray-700 rounded-2xl transition-all duration-300"
// //                         style={{ width: "50%", left: isBuyer ? "0%" : "50%" }}
// //                     ></div>
// //                     <button
// //                         className={`relative z-10 w-1/2 py-2 font-bold transition-colors duration-300 ${isBuyer ? "text-white" : "text-black"}`}
// //                         onClick={() => setIsBuyer(true)}
// //                     >
// //                         Personal
// //                     </button>
// //                     <button
// //                         className={`relative z-10 w-1/2 py-2 font-bold transition-colors duration-300 ${!isBuyer ? "text-white" : "text-black"}`}
// //                         onClick={() => setIsBuyer(false)}
// //                     >
// //                         Business
// //                     </button>
// //                 </div>
// //             )}

// //             {/* Form Container */}
// //             <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
// //                 <h1 className="text-xl font-bold text-gray-900 text-center mb-4">
// //                     {isAdmin
// //                         ? "Admin Login"
// //                         : isSignup
// //                             ? (isBuyer ? "Sign up for Personal Account" : "Sign up for Business Account")
// //                             : "Login to Your Account"}
// //                 </h1>

// //                 <form onSubmit={handleSubmit} className="space-y-4">
// //                     {/* Admin Login */}
// //                     {isAdmin ? (
// //                         <>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700">Email</label>
// //                                 <input
// //                                     type="email"
// //                                     name="aemail"
// //                                     value={adminData.aemail}
// //                                     onChange={handleChange}
// //                                     className="w-full p-2 border border-gray-300 rounded-md"
// //                                     placeholder="admin@example.com"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700">Password</label>
// //                                 <input
// //                                     type="password"
// //                                     name="apassword"
// //                                     value={adminData.apassword}
// //                                     onChange={handleChange}
// //                                     className="w-full p-2 border border-gray-300 rounded-md"
// //                                     placeholder="••••••••"
// //                                     required
// //                                 />
// //                             </div>
// //                         </>
// //                     ) : (
// //                         <>
// //                             {isSignup && (
// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-700">
// //                                         {isBuyer ? "Your Name" : "Business Name"}
// //                                     </label>
// //                                     <input
// //                                         type="text"
// //                                         name="name"
// //                                         value={formData.name}
// //                                         onChange={handleChange}
// //                                         className="w-full p-2 border border-gray-300 rounded-md"
// //                                         placeholder={isBuyer ? "John Doe" : "Business XYZ"}
// //                                         required
// //                                     />
// //                                 </div>
// //                             )}
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700">Email</label>
// //                                 <input
// //                                     type="email"
// //                                     name="email"
// //                                     value={formData.email}
// //                                     onChange={handleChange}
// //                                     className="w-full p-2 border border-gray-300 rounded-md"
// //                                     placeholder="user@example.com"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label className="block text-sm font-medium text-gray-700">Password</label>
// //                                 <input
// //                                     type="password"
// //                                     name="password"
// //                                     value={formData.password}
// //                                     onChange={handleChange}
// //                                     className="w-full p-2 border border-gray-300 rounded-md"
// //                                     placeholder="••••••••"
// //                                     required
// //                                 />
// //                             </div>
// //                         </>
// //                     )}

// //                     <button
// //                         type="submit"
// //                         className="w-full bg-gray-800 text-white py-2 rounded-md"
// //                     >
// //                         {isAdmin
// //                             ? "Login as Admin"
// //                             : isSignup
// //                                 ? "Sign Up"
// //                                 : "Login"}
// //                     </button>

// //                     {!isAdmin && (
// //                         <p className="text-sm text-gray-500 text-center">
// //                             {isSignup ? "Already have an account?" : "Don't have an account?"}
// //                             <button onClick={() => setIsSignup(!isSignup)} className="text-blue-600 underline ml-1">
// //                                 {isSignup ? "Login" : "Sign Up"}
// //                             </button>
// //                         </p>
// //                     )}
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SignupLogin;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const SignupLogin = () => {
// //   const [isBuyer, setIsBuyer] = useState(true);
// //   const [isSignup, setIsSignup] = useState(true);
// //   const [isAdmin, setIsAdmin] = useState(false);

// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: ''
// //   });

// //   const [adminData, setAdminData] = useState({
// //     aemail: '',
// //     apassword: ''
// //   });

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (isAdmin) {
// //       setAdminData((prev) => ({ ...prev, [name]: value }));
// //     } else {
// //       setFormData((prev) => ({ ...prev, [name]: value }));
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (isAdmin) {
// //       // Admin login request
// //       try {
// //         const res = await axios.post('http://localhost:3002/admin/login', {
// //           aemail: adminData.aemail,
// //           apassword: adminData.apassword
// //         });

// //         // Debugging: Log the response
// //         console.log("Admin login response:", res);

// //         if (res.status === 200) {
// //           localStorage.setItem('token', res.data.token);
// //           localStorage.setItem('role', 'admin');
          
// //           // Debugging: Confirm token storage
// //           console.log("Token stored:", localStorage.getItem('token'));
// //           console.log("Role set:", localStorage.getItem('role'));
          
// //           navigate('/AdminDashboard');
// //         }
// //       } catch (err) {
// //         console.error("Admin login failed:", err.response?.data || err.message);
// //       }

// //       setAdminData({ aemail: '', apassword: '' });
// //     } else {
// //       // User login/signup request
// //       const endpoint = isSignup
// //         ? isBuyer ? '/user/signup' : '/business/signup'
// //         : isBuyer ? '/user/login' : '/business/login';

// //       try {
// //         const res = await axios.post(`http://localhost:3002${endpoint}`, formData);

// //         // Debugging: Log the response
// //         console.log("User login/signup response:", res);

// //         if (res.status === 200) {
// //           localStorage.setItem('token', res.data.token);
// //           localStorage.setItem('role', isBuyer ? 'buyer' : 'business');
          
// //           // Debugging: Confirm token storage
// //           console.log("Token stored:", localStorage.getItem('token'));
// //           console.log("Role set:", localStorage.getItem('role'));

// //           navigate(isBuyer ? '/' : '/CatagoryAd');
// //         }
// //       } catch (err) {
// //         console.error("User login/signup failed:", err.response?.data || err.message);
// //       }

// //       setFormData({ name: '', email: '', password: '' });
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center mt-5">
// //       {/* Admin Toggle */}
// //       <div className="mb-4">
// //         <label className="mr-2 font-medium text-gray-700">Admin Login?</label>
// //         <input
// //           type="checkbox"
// //           checked={isAdmin}
// //           onChange={() => {
// //             console.log("Toggling admin login:", !isAdmin); // Debugging: Check toggle
// //             setIsAdmin(!isAdmin);
// //           }}
// //           className="w-4 h-4"
// //         />
// //       </div>

// //       {/* Account Switcher */}
// //       {!isAdmin && (
// //         <div className="relative flex bg-gray-200 rounded-2xl p-1 w-80 mb-5">
// //           <div
// //             className="absolute top-1 bottom-1 bg-gray-700 rounded-2xl transition-all duration-300"
// //             style={{ width: "50%", left: isBuyer ? "0%" : "50%" }}
// //           ></div>
// //           <button
// //             className={`relative z-10 w-1/2 py-2 font-bold ${isBuyer ? "text-white" : "text-black"}`}
// //             onClick={() => setIsBuyer(true)}
// //           >
// //             Personal
// //           </button>
// //           <button
// //             className={`relative z-10 w-1/2 py-2 font-bold ${!isBuyer ? "text-white" : "text-black"}`}
// //             onClick={() => setIsBuyer(false)}
// //           >
// //             Business
// //           </button>
// //         </div>
// //       )}

// //       {/* Form */}
// //       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
// //         <h1 className="text-xl font-bold text-gray-900 text-center mb-4">
// //           {isAdmin
// //             ? "Admin Login"
// //             : isSignup
// //               ? (isBuyer ? "Sign up for Personal Account" : "Sign up for Business Account")
// //               : "Login to Your Account"}
// //         </h1>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           {isAdmin ? (
// //             <>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700">Email</label>
// //                 <input
// //                   type="email"
// //                   name="aemail"
// //                   value={adminData.aemail}
// //                   onChange={handleChange}
// //                   className="w-full p-2 border border-gray-300 rounded-md"
// //                   placeholder="admin@example.com"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700">Password</label>
// //                 <input
// //                   type="password"
// //                   name="apassword"
// //                   value={adminData.apassword}
// //                   onChange={handleChange}
// //                   className="w-full p-2 border border-gray-300 rounded-md"
// //                   placeholder="••••••••"
// //                   required
// //                 />
// //               </div>
// //             </>
// //           ) : (
// //             <>
// //               {isSignup && (
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700">
// //                     {isBuyer ? "Your Name" : "Business Name"}
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border border-gray-300 rounded-md"
// //                     placeholder={isBuyer ? "John Doe" : "Business XYZ"}
// //                     required
// //                   />
// //                 </div>
// //               )}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700">Email</label>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className="w-full p-2 border border-gray-300 rounded-md"
// //                   placeholder="user@example.com"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700">Password</label>
// //                 <input
// //                   type="password"
// //                   name="password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   className="w-full p-2 border border-gray-300 rounded-md"
// //                   placeholder="••••••••"
// //                   required
// //                 />
// //               </div>
// //             </>
// //           )}

// //           <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md">
// //             {isAdmin
// //               ? "Login as Admin"
// //               : isSignup
// //                 ? "Sign Up"
// //                 : "Login"}
// //           </button>

// //           {!isAdmin && (
// //             <p className="text-sm text-gray-500 text-center">
// //               {isSignup ? "Already have an account?" : "Don't have an account?"}
// //               <button
// //                 type="button"
// //                 onClick={() => setIsSignup(!isSignup)}
// //                 className="text-blue-600 underline ml-1"
// //               >
// //                 {isSignup ? "Login" : "Sign Up"}
// //               </button>
// //             </p>
// //           )}
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupLogin;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignupLogin = () => {
//     const [isBuyer, setIsBuyer] = useState(true);  // Tracks if the user is a buyer or business
//     const [isSignup, setIsSignup] = useState(true);  // Tracks if the form is for signup or login
//     const [isAdmin, setIsAdmin] = useState(false);  // Tracks if the form is for admin login
  
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       password: ''
//     });
  
//     const [adminData, setAdminData] = useState({
//       aemail: '',
//       apassword: ''
//     });
  
//     const [error, setError] = useState('');  // State to hold error messages
  
//     const navigate = useNavigate();
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       if (isAdmin) {
//         setAdminData((prev) => ({ ...prev, [name]: value }));
//       } else {
//         setFormData((prev) => ({ ...prev, [name]: value }));
//       }
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setError('');  // Reset error message before submitting
  
//       try {
//         if (isAdmin) {
//           // Admin login request
//           const res = await axios.post('http://localhost:3002/admin/login', {
//             aemail: adminData.aemail,
//             apassword: adminData.apassword,
//             role: 'admin',  // Explicitly send 'admin' role for admin login
//           });
  
//           if (res.status === 200) {
//             localStorage.setItem('token', res.data.token);
//             localStorage.setItem('role', 'admin');
//             navigate('/AdminDashboard');
//           }
//         } else {
//           // User login/signup request
//           const endpoint = isSignup
//             ? isBuyer ? '/user/signup' : '/business/signup'
//             : isBuyer ? '/user/login' : '/business/login';
  
//           const role = isBuyer ? 'buyer' : 'business';  // Set role here
  
//           const res = await axios.post(`http://localhost:3002${endpoint}`, { ...formData, role });
  
//           if (res.status === 200) {
//             localStorage.setItem('token', res.data.token);
//             localStorage.setItem('role', role);
//             navigate(isBuyer ? '/' : '/CategoryAd');
//           }
//         }
//       } catch (err) {
//         console.error("Login/Signup failed:", err.response?.data || err.message);
//         setError('An error occurred. Please try again.');  // Set error message on failure
//       }
  
//       // Clear form data after submission
//       if (!isAdmin) {
//         setFormData({ name: '', email: '', password: '' });
//       } else {
//         setAdminData({ aemail: '', apassword: '' });
//       }
//     };
  
//   return (
//     <div className="flex flex-col items-center mt-5">
//       {/* Admin Toggle */}
//       <div className="mb-4">
//         <label className="mr-2 font-medium text-gray-700">Admin Login?</label>
//         <input
//           type="checkbox"
//           checked={isAdmin}
//           onChange={() => {
//             console.log("Toggling admin login:", !isAdmin); // Debugging: Check toggle
//             setIsAdmin(!isAdmin);
//           }}
//           className="w-4 h-4"
//         />
//       </div>

//       {/* Account Switcher */}
//       {!isAdmin && (
//         <div className="relative flex bg-gray-200 rounded-2xl p-1 w-80 mb-5">
//           <div
//             className="absolute top-1 bottom-1 bg-gray-700 rounded-2xl transition-all duration-300"
//             style={{ width: "50%", left: isBuyer ? "0%" : "50%" }}
//           ></div>
//           <button
//             className={`relative z-10 w-1/2 py-2 font-bold ${isBuyer ? "text-white" : "text-black"}`}
//             onClick={() => setIsBuyer(true)}
//           >
//             Personal
//           </button>
//           <button
//             className={`relative z-10 w-1/2 py-2 font-bold ${!isBuyer ? "text-white" : "text-black"}`}
//             onClick={() => setIsBuyer(false)}
//           >
//             Business
//           </button>
//         </div>
//       )}

//       {/* Form */}
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-xl font-bold text-gray-900 text-center mb-4">
//           {isAdmin
//             ? "Admin Login"
//             : isSignup
//               ? (isBuyer ? "Sign up for Personal Account" : "Sign up for Business Account")
//               : "Login to Your Account"}
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {isAdmin ? (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="aemail"
//                   value={adminData.aemail}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="admin@example.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   name="apassword"
//                   value={adminData.apassword}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="••••••••"
//                   required
//                 />
//               </div>
//             </>
//           ) : (
//             <>
//               {isSignup && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {isBuyer ? "Your Name" : "Business Name"}
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded-md"
//                     placeholder={isBuyer ? "John Doe" : "Business XYZ"}
//                     required
//                   />
//                 </div>
//               )}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="user@example.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="••••••••"
//                   required
//                 />
//               </div>
//             </>
//           )}

//           <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md">
//             {isAdmin
//               ? "Login as Admin"
//               : isSignup
//                 ? "Sign Up"
//                 : "Login"}
//           </button>

//           {!isAdmin && (
//             <p className="text-sm text-gray-500 text-center">
//               {isSignup ? "Already have an account?" : "Don't have an account?"}
//               <button
//                 type="button"
//                 onClick={() => setIsSignup(!isSignup)}
//                 className="text-blue-600 underline ml-1"
//               >
//                 {isSignup ? "Login" : "Sign Up"}
//               </button>
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupLogin;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignupLogin = () => {
//   const [isBuyer, setIsBuyer] = useState(true);  // Tracks if the user is a buyer or business
//   const [isSignup, setIsSignup] = useState(true);  // Tracks if the form is for signup or login
//   const [isAdmin, setIsAdmin] = useState(false);  // Tracks if the form is for admin login

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [adminData, setAdminData] = useState({
//     aemail: '',
//     apassword: ''
//   });

//   const [error, setError] = useState('');  // State to hold error messages

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (isAdmin) {
//       setAdminData((prev) => ({ ...prev, [name]: value }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');  // Reset error message before submitting

//     try {
//       if (isAdmin) {
//         // Admin login request
//         const res = await axios.post('http://localhost:3002/admin/login', {
//           aemail: adminData.aemail,
//           apassword: adminData.apassword,
//           role: 'admin',  // Explicitly send 'admin' role for admin login
//         });

//         if (res.status === 200) {
//           localStorage.setItem('token', res.data.token);
//           localStorage.setItem('role', 'admin');
//           navigate('/AdminDashboard');
//         }
//       } else {
//         // User login/signup request
//         const endpoint = isSignup
//           ? isBuyer ? '/user/signup' : '/business/signup'
//           : isBuyer ? '/user/login' : '/business/login';

//         const role = isBuyer ? 'buyer' : 'business';  // Set role here

//         const res = await axios.post(`http://localhost:3002${endpoint}`, { ...formData, role });

//         if (res.status === 200) {
//           localStorage.setItem('token', res.data.token);
//           localStorage.setItem('role', role);
//           navigate(isBuyer ? '/' : '/CategoryAd');
//         }
//       }
//     } catch (err) {
//       console.error("Login/Signup failed:", err.response?.data || err.message);
//       setError('An error occurred. Please try again.');  // Set error message on failure
//     }

//     // Clear form data after submission
//     if (!isAdmin) {
//       setFormData({ name: '', email: '', password: '' });
//     } else {
//       setAdminData({ aemail: '', apassword: '' });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mt-5">
//       {/* Admin Toggle */}
//       <div className="mb-4">
//         <label className="mr-2 font-medium text-gray-700">Admin Login?</label>
//         <input
//           type="checkbox"
//           checked={isAdmin}
//           onChange={() => setIsAdmin(!isAdmin)}
//           className="w-4 h-4"
//         />
//       </div>

//       {/* Account Switcher */}
//       {!isAdmin && (
//         <div className="relative flex bg-gray-200 rounded-2xl p-1 w-80 mb-5">
//           <div
//             className="absolute top-1 bottom-1 bg-gray-700 rounded-2xl transition-all duration-300"
//             style={{ width: "50%", left: isBuyer ? "0%" : "50%" }}
//           ></div>
//           <button
//             className={`relative z-10 w-1/2 py-2 font-bold ${isBuyer ? "text-white" : "text-black"}`}
//             onClick={() => setIsBuyer(true)}
//           >
//             Personal
//           </button>
//           <button
//             className={`relative z-10 w-1/2 py-2 font-bold ${!isBuyer ? "text-white" : "text-black"}`}
//             onClick={() => setIsBuyer(false)}
//           >
//             Business
//           </button>
//         </div>
//       )}

//       {/* Form */}
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-xl font-bold text-gray-900 text-center mb-4">
//           {isAdmin
//             ? "Admin Login"
//             : isSignup
//               ? (isBuyer ? "Sign up for Personal Account" : "Sign up for Business Account")
//               : "Login to Your Account"}
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {isAdmin ? (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="aemail"
//                   value={adminData.aemail}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="admin@example.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   name="apassword"
//                   value={adminData.apassword}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="••••••••"
//                   required
//                 />
//               </div>
//             </>
//           ) : (
//             <>
//               {isSignup && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {isBuyer ? "Your Name" : "Business Name"}
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded-md"
//                     placeholder={isBuyer ? "John Doe" : "Business XYZ"}
//                     required
//                   />
//                 </div>
//               )}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="user@example.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   placeholder="••••••••"
//                   required
//                 />
//               </div>
//             </>
//           )}

//           <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md">
//             {isAdmin
//               ? "Login as Admin"
//               : isSignup
//                 ? "Sign Up"
//                 : "Login"}
//           </button>

//           {!isAdmin && (
//             <p className="text-sm text-gray-500 text-center">
//               {isSignup ? "Already have an account?" : "Don't have an account?"}
//               <button
//                 type="button"
//                 onClick={() => setIsSignup(!isSignup)}
//                 className="text-blue-600 underline ml-1"
//               >
//                 {isSignup ? "Login" : "Sign Up"}
//               </button>
//             </p>
//           )}

//           {/* Error Message */}
//           {error && <p className="text-red-500 text-center">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupLogin;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupLogin = () => {
  const [isBuyer, setIsBuyer] = useState(true);
  const [isSignup, setIsSignup] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [adminData, setAdminData] = useState({
    aemail: '',
    apassword: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    isAdmin
      ? setAdminData((prev) => ({ ...prev, [name]: value }))
      : setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isAdmin) {
        const res = await axios.post('http://localhost:3002/admin/login', {
          aemail: adminData.aemail,
          apassword: adminData.apassword,
          role: 'admin',
        });

        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('role', 'admin');
          navigate('/AdminDashboard');
        }
      } else {
        const endpoint = isSignup
          ? isBuyer ? '/user/signup' : '/business/signup'
          : isBuyer ? '/user/login' : '/business/login';

        const role = isBuyer ? 'buyer' : 'business';

        const res = await axios.post(`http://localhost:3002${endpoint}`, {
          ...formData,
          role
        });

        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('role', role);
          navigate(isBuyer ? '/' : '/CategoryAd');
        }
      }
    } catch (err) {
      console.error("Login/Signup failed:", err.response?.data || err.message);
      setError('An error occurred. Please try again.');
    }

    isAdmin
      ? setAdminData({ aemail: '', apassword: '' })
      : setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Admin Toggle */}
      <div className="mb-4">
        <label className="mr-2 font-medium text-gray-700">Admin Login?</label>
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={() => setIsAdmin(!isAdmin)}
          className="w-4 h-4"
        />
      </div>

      {/* Role Switcher (only for users) */}
      {!isAdmin && (
        <div className="relative flex bg-gray-200 rounded-2xl p-1 w-80 mb-5">
          <div
            className="absolute top-1 bottom-1 bg-gray-700 rounded-2xl transition-all duration-300"
            style={{ width: "50%", left: isBuyer ? "0%" : "50%" }}
          />
          <button
            className={`relative z-10 w-1/2 py-2 font-bold ${isBuyer ? "text-white" : "text-black"}`}
            onClick={() => setIsBuyer(true)}
          >
            Personal
          </button>
          <button
            className={`relative z-10 w-1/2 py-2 font-bold ${!isBuyer ? "text-white" : "text-black"}`}
            onClick={() => setIsBuyer(false)}
          >
            Business
          </button>
        </div>
      )}

      {/* Form Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-xl font-bold text-gray-900 text-center mb-4">
          {isAdmin
            ? "Admin Login"
            : isSignup
              ? (isBuyer ? "Sign up for Personal Account" : "Sign up for Business Account")
              : "Login to Your Account"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isAdmin ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="aemail"
                  value={adminData.aemail}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="admin@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="apassword"
                  value={adminData.apassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                  required
                />
              </div>
            </>
          ) : (
            <>
              {isSignup && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    {isBuyer ? "Your Name" : "Business Name"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder={isBuyer ? "John Doe" : "Business XYZ"}
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="user@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition">
            {isAdmin ? "Login as Admin" : isSignup ? "Sign Up" : "Login"}
          </button>

          {!isAdmin && (
            <p className="text-sm text-gray-500 text-center">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={() => setIsSignup(!isSignup)}
                className="text-blue-600 underline ml-1"
              >
                {isSignup ? "Login" : "Sign Up"}
              </button>
            </p>
          )}

          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignupLogin;
