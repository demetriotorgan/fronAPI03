import React, {useState} from 'react'
import './EditForm.css'

const EditForm = ({editRegistro,cadastro}) => {
    const [nome, setNome] = useState(cadastro.nome)
    const [email, setEmail] = useState(cadastro.email)

    const API = 'https://teste5api-production.up.railway.app/person/'

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const CadAtualizado = {
          id:cadastro.id,          
          nome:nome,
          email:email,          
        }    
        //PATCH ----
        const data = await fetch(API+cadastro.id,{
          method:"PATCH",
          body:JSON.stringify(CadAtualizado),
          headers:{
            "Content-Type": "application/json",
          }
        })
        editRegistro(CadAtualizado)
        console.log(data)                
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
            onChange={(e)=>setNome(e.target.value)}
            />
          </div>
          <div className='painel'>
            <label htmlFor='email'>Email</label>
            <input 
            value={email || ''}
            type='email'            
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='enviar'>
            <button type='submit'>Editar</button>
          </div>
        </form>
    </div>
  )
}

export default EditForm