import React, { useContext, useState } from 'react'

import { data } from './data'
import helpers from '../../helpers'
import UserHeader from './components/UserHeader'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import PostCard from '../../components/PostCard'
import ModalWindow from './../../components/ModalWindow'
import GinkForm from './../../components/GinkForm'
import Button from '../../components/Button';
import icons from '../../components/icons';
import Header from '../../components/header/Header'

function UserPage() {
  const { currentUser } = useContext(CurrentUserContext)
  const user = currentUser.id === 1 ? currentUser : data.user;
  helpers.setPageTitle(`${user.username}'s profile`)
  const [formForGinkVisible, setFormForGinkVisible] = useState(false)

  const recentPosts = data.map(post => {
    return <PostCard key={post.id} post={post} />
  })

  const submitGink = () => {
    // send gink here
    closeModal()
  }

  const closeModal = () => {
    setFormForGinkVisible(false)
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex flex-col w-full items-center gap-5'>
          <UserHeader user={user} />
        </div>
        <Header heading={<></>} subheading={(
          <>
            <div className="flex justify-center fixed">
              <div className='flex fixed top-0 right-0 w-1/5'>
                <Button
                  icon={icons.pencil}
                  className={'w-full h-full rounded-none rounded-b-2xl border-ruby-red bg-ruby-red text-white'}
                  onClick={() => { setFormForGinkVisible(true) }}
                />
              </div>
            </div>
            <div className='flex flex-col mt-24 gap-12 w-5/6 md:w-1/2'>
              {recentPosts}
            </div>
          </>
        )} />
      </div>
      <div>
        <ModalWindow
          title='Write gink'
          isOpen={formForGinkVisible}
          onRequestClose={closeModal}
          content={(
            <GinkForm
              onSubmit={submitGink} />)}
        />
      </div>
    </>
  )
}

export default UserPage;
