import React,{useState} from 'react'

const Login_Logout = () => {
  
      

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{isLoggedIn ? "Welcome!" : "Please Log In"}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );



}

export default Login_Logout
