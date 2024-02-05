import React from 'react'
import './Banner.css'
import mern from './mern.png'

const Banner = () => {
  return (
    <>
    <div className='banner'>
    <h1>C.R.U.D</h1>
    <h4>Desenvolvido por: Demétrio Torgan</h4>    
    <img src={mern} />
    </div>
    </>
  )
}

export default Banner