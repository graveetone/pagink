import React, { useContext } from 'react'

import { CurrentUserContext } from '../../../contexts/CurrentUserContext'

function UserGreeting() {
  const { currentUser } = useContext(CurrentUserContext)
  return (
    <div className='flex flex-col gap-1 justify-center items-center mt-3 text-3xl font-balsamiq'>
      <span>
        {currentUser.username}
      </span>
    </div>
  )
}

export default UserGreeting;
