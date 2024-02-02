import React, { useState } from 'react'

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
    <div className='App'> 
        <form onSubmit={handleSubmit}>
            <input 
            value={nome || ''}
            type='text'
            placeholder='Digite seu nome'
            onChange={(e)=>setNome(e.target.value)}
            />
            <input 
            value={email || ''}
            type='email'
            placeholder='Digite seu email seu email'
            onChange={(e)=>setEmail(e.target.value)}
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form 