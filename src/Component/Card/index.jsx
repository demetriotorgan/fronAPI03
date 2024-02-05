import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import './Card.css'


const Card = ({registro, deleteRegistro, editRegistro}) => {
  return (
    <div className='card'>
      <div className='dados'>
        <span>{registro.nome}</span>
        <span>{registro.email}</span>
      </div>
      <div className='botoes'>
        <button onClick={()=>deleteRegistro(registro.id)}><FaTrash /></button>
        <button onClick={()=>editRegistro(registro.id)} ><FaEdit /></button>
        {console.log(registro.id)}
      </div>
    </div>
  )
}

export default Card