import React from 'react'

const Card = ({ user = {} }) => {
  const { name = '', company = {} } = user

  return (
    <div className="card">
      <h1>Nome: {name}</h1>
      <h2>Empresa: {company?.name}</h2>
      <h3>Nome: {company?.catchPhrase}</h3>
    </div>
  )
}

export default Card
