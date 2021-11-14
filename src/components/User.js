import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../redux/actions/user'
import Card from './Card'

const User = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.users.users)
  const loading = useSelector((state) => state.users.loading)
  const error = useSelector((state) => state.users.error)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <>
      <h1 className="title">{loading ? 'Carregando...' : 'Apresentando:'} </h1>
      <div>
        {userData?.map((item, index) => <Card user={item} key={index} />) || (
          <p>Sem dados</p>
        )}
      </div>
      <p> {error && error} </p>
    </>
  )
}

export default User
