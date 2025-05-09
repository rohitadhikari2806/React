// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api';

// function Register() {
//   const [form, setForm] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   // Handle input changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleRegister = async () => {
//     try {
//       await api.post('/users/register', form);
//       alert('User Registered Successfully');
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration Error:', error);
//       alert('Registration Failed');
//     }
//   };
//   return (
//     <div style={{ margin: '50px auto', width: '300px', textAlign: 'center' }}>
//       <h2>Register</h2>
//       <input
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={form.username}
//         onChange={handleChange}
//         style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
//       />
//       <br />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={handleChange}
//         style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
//       />
//       <br />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={handleChange}
//         style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
//       />
//       <br />
//       <button
//         onClick={handleRegister}
//         style={{ padding: '10px 20px', cursor: 'pointer' }}
//       >
//         Register
//       </button>
//     </div>
//   );
// }

// export default Register;



// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // function Register() {
// //   const [form, setForm] = useState({
// //     username: '',
// //     email: '',
// //     password: ''
// //   });

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleRegister = async () => {
// //     try {
// //       await axios.post('http://localhost:5000/api/users/register', form, {
// //         withCredentials: true
// //       });
// //       alert('User Registered Successfully');
// //       navigate('/login');
// //     } catch (error) {
// //       console.error(error);
// //       alert('Registration Failed');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Register</h2>
// //       <input type="text" name="username" placeholder="Username" onChange={handleChange} /><br />
// //       <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
// //       <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
// //       <button onClick={handleRegister}>Register</button>
// //     </div>
// //   );
// // }

// // export default Register;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await api.post('/users/register', form);
      alert('User Registered Successfully');
      navigate('/login');
    } catch (error) {
      console.error('Registration Error:', error);
      alert(error.response?.data?.message || 'Registration Failed');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">Register</h2>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter your username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
