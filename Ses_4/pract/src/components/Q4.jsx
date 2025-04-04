import React, { useState } from 'react'

const Q4 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>{isLoggedIn ? "LOGGED Out!" : "LOGGED In"}</h2>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
  

export default Q4
