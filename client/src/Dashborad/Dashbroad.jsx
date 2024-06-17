import React from 'react'
import { Link } from 'react-router-dom'

const Dashbroad = () => {
  return (
    <>
      <div className='dsahbroadcontainer'>
        <div className="dashbroad-main">
        <div className="createshirt">
           <p>createshirts</p>
           <Link to={"/createcloth"}>createshirt</Link>
        </div>
        <div className="createshoes">
           <p>createshoes</p>
           <Link to={"/createshoes"}>createshoes</Link>
        </div>
        </div>
      </div>
    </>
  
  )
}

export default Dashbroad