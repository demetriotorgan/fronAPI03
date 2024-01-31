import { useEffect, useState } from 'react'
import './App.css'
import {BsTrash} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [dados, setDados] = useState([])
  const [nome, setNome] = useState('')
  const [email,setEmail] = useState('')
  
  //const API = 'https://jsonplaceholder.typicode.com/posts/1'
    const API = 'https://teste4api-production.up.railway.app/person/'
  useEffect(()=>{
    const loadData = async ()=>{
      const res = await fetch(API)
      .then((res)=>res.json())      
      .catch((err)=>console.log(err))
      setDados(res)
      console.log('Esses são os dados',dados)
    }
    loadData()  
  },[])

  const handleSubmit = async (e)=>{
    e.preventDefault()    
    const registro = {
      nome,
      email,
    }
    console.log(registro)

    //limpando os campos de texto
    setNome('')
    setEmail('')

    //fazendo o Fetch
    await fetch(API,{
      method:"POST",
      body:JSON.stringify(registro),
      headers:{
        "Content-Type":"application/json"
      }
    })
    setDados((prevState)=>[registro,...prevState])
    toast.success("Registro criado com sucesso!",{
      duration: 2000,
    })
  }

  const handleDelete = async (id)=>{
      await fetch(API+id,{
        method:'DELETE',
      })
      setDados((prevState)=> prevState.filter((item)=> item._id !== id))
    // const res = await fetch(API+id)
    // .then((res)=>res.json())
    // .then(res =>console.log(res))

    console.log(API+id)
    toast.info("Registro excluido com sucesso")
  }
  
  return (
       
    <div className="App">
    <ToastContainer />
      <h1>API: Teste 1</h1>
      <form className='formulario' onSubmit={handleSubmit}>        
        <label htmlFor='nome'>Nome</label>
          <input 
          type='text' 
          name='nome' 
          value={nome || ''}
          placeholder='Digite seu nome'
          onChange={(e)=>setNome(e.target.value)}
          />
        <label htmlFor='email'>Email</label>
          <input 
          type='email' 
          name='email' 
          value={email || ''}
          placeholder='Digite seu email'
          onChange={(e)=>setEmail(e.target.value)}
          />
        <button type='submit'>Enviar</button>
      </form>
      <div className='lista-dados'>
        {dados.map((item, index)=>(
           <div className='card' key={index}>
           <h3>{item.nome}</h3>
           <h5>{item.email}</h5>
           <BsTrash onClick={()=>handleDelete(item._id)}/>
       </div>
        ))}
      </div>
    </div>
    
  )
}

export default App
