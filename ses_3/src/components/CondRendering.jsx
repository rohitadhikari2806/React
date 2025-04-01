import React from 'react'

const CondRendering = ({isLogged}) => {
//   if (isLogged) {
//     return <h1>Welcome</h1>
//   } else {
//     return <h1>Error</h1>
//   }
  
    return (
   <>
  {/* { isLogged ? <h1>Login Successful</h1> : <h1>Login Fail</h1>} */}
  {
    isLogged && <h1>Welcome</h1> || <h1>Login Fail</h1>
  }
   </>
  )
}

export default CondRendering
