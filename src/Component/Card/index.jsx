import React from 'react'
import './Card.css'
import {BsTrash} from 'react-icons/bs'

const API = 'https://teste2api-production.up.railway.app/person/'
const handleDelete = async (id)=>{
  await fetch(API+id,{
    method:'DELETE',
  })
  
}

const Card = (props) => {
  return (
    <div className='card'>
        <h3>{props.nome}</h3>
        <h5>{props.email}</h5>
        <BsTrash onClick={()=>handleDelete(props.id)}/>
    </div>
  )
}

export default Card