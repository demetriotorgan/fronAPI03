import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import './Form.css'

const Form  = (props) => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addRegistro(nome, email)
        setNome('')
        setEmail('')
    }

  return (
    <div> 
        <form onSubmit={handleSubmit} className='formulario'>
          <div className='painel'>
            <label htmlFor='nome'>Nome</label>
            <input
            value={nome || ''}
            type='text'
            name='nome'
            placeholder='Digite seu nome'
            onChange={(e)=>setNome(e.target.value)}
            />
          </div>
          <div className='painel'>
            <label htmlFor='email'>Email</label>
            <input 
            value={email || ''}
            type='email'
            name='email'
            placeholder='Digite seu email seu email'
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='enviar'>            
            <button><IoIosSend /></button>
          </div>
        </form>
    </div>
  )
}

export default Form 