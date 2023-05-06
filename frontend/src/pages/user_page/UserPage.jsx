import React, { useContext, useState } from 'react'

import helpers from '../../helpers'
import UserHeader from './components/UserHeader'
import PostCard from '../../components/PostCard'
import { useParams } from 'react-router-dom'
import LoadableContent from '../../components/LoadableContent'
import { useUserPostsQuery, useUserQuery } from './../../api/queries/users'
import CreateGinkSection from '../../components/CreateGinkSection'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function UserPage() {
  const userId = parseInt(useParams().userId);
  const { currentUser } = useContext(CurrentUserContext)

  const recentPosts = ({ posts }) => posts.map(post => {
    return <PostCard key={post.id} post={post} />
  })

  return (
    <>
      <LoadableContent hook={useUserQuery} params={userId}>
        {
          (user) => {
            return <>
              {helpers.setPageTitle(`${user.username}'s profile`)}
              <div className='flex flex-col justify-center items-center w-full'>
                <div className='flex flex-col w-full items-center gap-5'>
                  <UserHeader user={user} />
                </div>
                <>
                  <div className='flex flex-col mt-24 gap-12 w-5/6 md:w-1/2'>
                    <LoadableContent hook={useUserPostsQuery} params={user.id}>
                      {recentPosts}
                    </LoadableContent>
                  </div>
                </>
              </div>
              {helpers.areUsersTheSame(currentUser, user) && <CreateGinkSection currentUser={user} />}
            </>
          }
        }
      </LoadableContent>
    </>
  )
}

export default UserPage;
