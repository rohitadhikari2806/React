import React,{useState} from 'react'
import './Dark.css'

const Dark_Light = () => {
        const [darkMode, setDarkMode] = useState(false);
      
        const toggleMode = () => {
          setDarkMode((prevMode) => !prevMode);
          document.body.classList.toggle("dark-mode", !darkMode);
        };
  return (
      
    <div className={darkMode ? "dark-mode" : "light-mode"} style={{ padding: "20px", textAlign: "center", transition: "background 0.3s ease" }}>
    <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
    <button 
      onClick={toggleMode} 
      style={{ 
        padding: "10px", 
        fontSize: "16px", 
        cursor: "pointer", 
        backgroundColor: darkMode ? "" : "#fff", 
        color: darkMode ? "#fff" : "#000", 
        border: "1px solid #ccc", 
        borderRadius: "5px",
        transition: "all 0.3s ease"
      }}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  </div>
    
  )
}

export default Dark_Light
