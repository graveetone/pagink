import React, { useContext } from 'react'
import { data } from './data'
import { setPageTitle } from '../../helpers'
import UserHeader from './components/UserHeader'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function UserPage() {
  const { currentUser } = useContext(CurrentUserContext)
  const user = currentUser.id === 1 ? currentUser : data.user;
  setPageTitle(`${user.username}'s profile`)
  return (
    <>
      <div className='flex flex-col w-full items-center gap-5'>
        <UserHeader user={user} />
      </div>
    </>
  )
}

export default UserPage;
