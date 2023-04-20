import React from 'react'
import { data as user } from './data'
import { setPageTitle } from '../../helpers'
import UserHeader from './components/UserHeader'

function UserPage() {
  setPageTitle(`${user.username}'s profile`)
  return (
    <>
      <div className='flex flex-col w-full items-center'>
        <UserHeader user={user} />
      </div>
    </>
  )
}

export default UserPage;
