import React,{useState} from 'react'

const Q5 = () => {
    const [userRole, setUserRole] = useState("Regular User");

    const handleRoleChange = (role) => {
      setUserRole(role);
    };
  
    return (
      <div>
        <div>
          <button onClick={() => handleRoleChange("Admin")}>Set Admin</button>
          <button onClick={() => handleRoleChange("Regular User")}>
            Set Regular User
          </button>
        </div>
  
        <h2>Dashboard</h2>
  
        {userRole === "Admin" && (
          <div>
            <h3>Admin Panel</h3>
            <p>Welcome, Admin! You have access to all features.</p>
          </div>
        )}
  
        {userRole === "Regular User" && (
          <div>
            <h3>User Panel</h3>
            <p>Welcome, Regular User! You have limited access.</p>
          </div>
        )}
      </div>
    );
  }


export default Q5

