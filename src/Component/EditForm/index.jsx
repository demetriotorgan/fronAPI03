import React, {useState} from 'react'

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
    <div className='App'> 
        <form onSubmit={handleSubmit}>
            {console.log('Esse é o nome',cadastro.nome)}
            <input 
            value={nome || ''}
            type='text'            
            onChange={(e)=>setNome(e.target.value)}
            />
            <input 
            value={email || ''}
            type='email'            
            onChange={(e)=>setEmail(e.target.value)}
            />
            <button type='submit'>Editar</button>
        </form>
    </div>
  )
}

export default EditForm