import React from 'react';
import './Style.css' 

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      
        <div className='form1'>
        <form action="" method="post">
      <table>
  <tr>
	<td>Name</td>
	<td><textarea name="" rows="" cols=""></textarea></td>
  </tr>
  <tr>
	<td>Email</td>
	<td><input type="email" name=""/></td>
  </tr>
  <tr>
	<td>Passsword</td>
	<td> <input type="password" name=""/></td>
  </tr>
  </table>
  </form>
  </div>
     
    </div>
  );
};

export default Home;