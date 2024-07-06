// // src/components/LoginPage.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
// import { loginUser } from '../api/userAuth';

// const Login = () => {
//     const [username, setUsername] = useState('emilys');
//     const [password, setPassword] = useState('emilyspass');
//     const [userInfo, setUserInfo] = useState([])
//     const [tokenData, setTokenData] = useState('')

//     const navigate = useNavigate()

//     const handleLogin = async () => {


//         try {
//             const logindata = await loginUser(username, password)
//             console.log('logindata', logindata)
//             setUserInfo(logindata)

//             navigate(`/home/${tokenData}`)


//         } catch (error) {
//             console.log(error)
//         }


//     };

//     return (
//         <div>
//             <h2>Login Page</h2>
//             <form >
//                 <label>
//                     Username:
//                     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </label>
//                 <br />
//                 <button onClick={handleLogin}>Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;


// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/userAuth';

const Login = () => {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser(username, password);

      const token = response?.token; // Adjust this based on your API response structure

      if (token) {
        // navigate(`/home/${token}`);
        navigate(`/home?type=forgot_password&token=${token}`);
      } 
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
    
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>
      
    </div>
  );
};

export default Login;
