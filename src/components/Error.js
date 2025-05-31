import React from 'react'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom'

const Error = () => {
    const err=useRouteError()
    console.log()
  return (
    <div>
        <h1>
            oooppppssss!!!!!!
            <br/>{err.status}: Not found 
            <p><Link to="/">Go back </Link></p>
            
        </h1>
    </div>
  )
}

export default Error