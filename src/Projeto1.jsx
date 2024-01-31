import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [dados, setDados] = useState([])
  //const API = 'https://jsonplaceholder.typicode.com/posts/1'
    const API = 'https://teste2api-production.up.railway.app/person'
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

  return (
    <div>
      {console.log(dados)}
      {dados.map((item)=>(
        <p>{item.nome}</p>
      ))}
    </div>
  )
}

export default App
