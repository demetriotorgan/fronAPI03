import { useEffect, useState } from 'react'
import './App.css'
import Form from './Component/Form'
import Card from './Component/Card'
import EditForm from './Component/EditForm'
import Banner from './Component/Banner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Component/Loader'

function App() {
  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(false)
  
  const API = 'https://teste5api-production.up.railway.app/person/'

  useEffect(()=>{
    const loadData = async ()=>{

      const res = await fetch(API)
        .then((res)=>res.json())
        .then((json)=>{
        setDados(json)
        setLoading(true)
        })        
        .catch((err)=>console.log(err))         
      
        console.log('Dados:', dados)
    }
      loadData()
  },[])

  const addRegistro = async (nome, email) =>{
    
    const registro = {
      id: Math.random(),
      nome: nome,
      email: email,        
      isEditing:false,
    }
    
    console.log(registro)
    //fazendo o fetch
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

  const deleteRegistro = async (id)=>{
      // setDados(dados.filter(item => item.id !== id))
      // console.log(id)

      await fetch(API+id,{
        method:'DELETE',
      })
      setDados((prevState)=> prevState.filter((item)=> item.id !== id))   

    console.log(API+id)    
    toast.info("Registro excluido com sucesso")
  }

  const editTarefa = async ({nome, email, id})=>{
    setDados(
      dados.map(item=> 
        item.id === id ? {...item, nome, email, isEditing: !item.isEditing}:item))       
  }

  const editRegistro = (id)=>{
    setDados(
      dados.map(item=>
        item.id === id ? {...item, isEditing: !item.isEditing}:item))
      console.log(dados)
  }

   return (
    <>
    <div className='container'>
    <ToastContainer />
      <Banner />
      <Form addRegistro={addRegistro} />
    </div>      
    <div className='posts'>        
      {dados.map((item, index)=>(
        item.isEditing ? (
          <EditForm editRegistro={editTarefa} cadastro={item} key={item.id} />
        ) :
        (            
        <Card registro={item} key={index}
        deleteRegistro={deleteRegistro}
        editRegistro={editRegistro}
        />        
        )       
      ))}
    {!loading && <Loader />}  
    </div>    
    </>       
  )
}

export default App
