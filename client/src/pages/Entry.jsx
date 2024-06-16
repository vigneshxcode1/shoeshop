import React from 'react'
import { Link } from 'react-router-dom'

const Entry = () => {
  return (
    <div>
        <h1>welcome</h1>
        <h2>shirts</h2>
        <button><Link to="/shirthome">Shirts</Link></button>
        <button><Link to="/shirthome">Shoes</Link></button>
    </div>
  )
}

export default Entry