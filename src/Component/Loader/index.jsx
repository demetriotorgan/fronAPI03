import React from 'react'
import loading from './loading.svg'
import './Loader.css'

const Loading = () => {
  return (
    <div className='loader_container'>
        <img className='loader' src={loading} alt='carregando' />
    </div>
  )
}

export default Loading