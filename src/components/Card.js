import React from 'react'

const Card = ({ user = {} }) => {
  const { title = '', id, name = '', company = {} } = user

  return (
    <div className="card">
      <h1>Nome: {name || title}</h1>
      <h2>Empresa: {company?.name || id}</h2>
    </div>
  )
}

export default Card
