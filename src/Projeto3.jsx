import { useEffect, useState } from 'react'
import './App.css'
import Form from './Component/Form'
import Card from './Component/Card'

function App() {
  const [dados, setDados] = useState([])
  
  const API = 'https://teste4api-production.up.railway.app/person/'

  const addRegistro = async (nome, email) =>{
    const registro = {
      id: Math.random(),
      nome: nome,
      email: email,        
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
  }

  const deleteRegistro = async (id)=>{
      // setDados(dados.filter(item => item.id !== id))
      console.log(id)
      await fetch(API+id,{
        method:'DELETE',
      })
      setDados((prevState)=> prevState.filter((item)=> item.id !== id))   

    console.log(API+id)
  }

   return (       
    <div className="App">
      <Form addRegistro={addRegistro} />
      {dados.map((item)=>(
        <Card registro={item} key={item.id}
        deleteRegistro={deleteRegistro}
        />

      ))}
    </div>
    
  )
}

export default App
