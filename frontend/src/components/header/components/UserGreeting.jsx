import React, { useContext } from 'react'

import { CurrentUserContext } from '../../../contexts/CurrentUserContext'

function UserGreeting() {
  const { currentUser } = useContext(CurrentUserContext)
  return (
    currentUser.username && (
      <div className='flex justify-center text-center items-center p-3 text-6xl font-amatic'>
        <p>
          Hello, {currentUser.username}
        </p>
      </div>
    )
  )
}

export default UserGreeting;
