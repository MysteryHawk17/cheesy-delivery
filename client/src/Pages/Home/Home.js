import React, { useState } from 'react'
import Pizza from '../../components/Pizza/Pizza'
import { data } from '../../data.js'
import './home.css'
const Home = () => {
  const [show,setShow]=useState(false)
  return (
    <div className='home'>
      <div className="row">
        {
          data.map((pizza) => {
            return (
              <div className='column'>
                <div className='pizz' >
                  <Pizza pizza={pizza} />
                </div>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}

export default Home