import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../redux/actions/user'
import Card from './Card'

const User = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.users.user)

  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: 'Helena',
          company: {
            name: 'Rest Ndonge',
            catchPhrase:
              'Prestação de serviço na área de desenvolvimento web!..',
          },
        },
      ]),
    )
  }, [])

  return (
    <>
      <h1>Apresentando:</h1>
      <div>
        {userData?.map((item, index) => <Card user={item} key={index} />) || (
          <>Sem dados</>
        )}
      </div>
    </>
  )
}

export default User
