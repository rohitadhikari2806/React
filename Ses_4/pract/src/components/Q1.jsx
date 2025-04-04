import React,{useState} from 'react'

const Q1 = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`User Details:\nName: ${name}\nAge: ${age}\nEmail: ${email}`);
    };


  return (
    <div className="card">
      <h2 className="card-title">User Details</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input 
          type="number" 
          placeholder="Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </form>
      <button className="hover-button" type="submit">Submit</button>
    </div>
  )
}

export default Q1
