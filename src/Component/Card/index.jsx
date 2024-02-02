import React from 'react'

const Card = ({registro, deleteRegistro, editRegistro}) => {
  return (
    <div>
        {registro.nome}
        <br />
        {registro.email}
        <br />
        <button onClick={()=>deleteRegistro(registro.id)}>Excluir</button>
        <button onClick={()=>editRegistro(registro.id)} >Editar</button>
        {console.log(registro.id)}
    </div>
  )
}

export default Card