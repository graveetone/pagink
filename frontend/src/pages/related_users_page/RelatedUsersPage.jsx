import React from 'react'

import helpers from '../../helpers'

import { Link, useParams } from 'react-router-dom'
import LoadableContent from '../../components/LoadableContent'
import { useUserRelatedUsersQuery } from '../../api/queries/users'

import Image from '../../components/Image'
import Heading from '../../components/Heading'
import Subheading from '../../components/Subheading'
function RelatedUsersPage() {
  const userId = parseInt(useParams().userId);

  return (
    <>
      <LoadableContent hook={useUserRelatedUsersQuery} params={userId}>
        {
          (user) => {
            { helpers.setPageTitle(`${user.username}'s bookmatees`) }
            return <>
              <div>
                <Heading>
                  {user.username}
                </Heading>
                <div className='flex flex-col w-full justify-around gap-6'>
                  <div className='flex flex-col w-full md:w-full'>
                    <div className='w-full'>
                      <Image src={user.image_url} alt={user.username} width={'w-56'} height={'h-56'} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
              </div>
              <div className='flex justify-evenly items-start p-3'>
                {/* bookmatees section*/}
                <div className='flex flex-col justify-center items-center w-full'>
                  <Subheading>
                    <span className='text-ruby-red text-xl'>
                      Bookmatees: {user.bookmateesCount}
                    </span>
                  </Subheading>
                  <div className='flex justify-center items-center flex-wrap'>
                    {user.bookmatees.map(bookmatee => {
                      return (
                        <>
                          <UserCard key={`bookmatee_${bookmatee.id}`} user={bookmatee} />
                        </>
                      )
                    })}
                  </div>
                </div>
                {/* bookmates section*/}
                <div className='flex flex-col justify-center items-center w-full'>
                  <Subheading>
                    <span className='text-ruby-red text-xl'>
                      Bookmates: {user.bookmatesCount}
                    </span>
                  </Subheading>
                  <div className='flex justify-center items-center flex-wrap'>
                    {user.bookmates.map(bookmate => {
                      return (
                        <>
                          <UserCard key={`bookmate_${bookmate.id}`} user={bookmate} />
                        </>
                      )
                    })}
                  </div>
                </div>
              </div>
            </>
          }
        }
      </LoadableContent >
    </>
  )
}

export default RelatedUsersPage;

function UserCard({ user }) {
  const linkToUser = `/user/${user.id}`
  return (
    <>
      <Link to={linkToUser} className='flex justify-center items-center flex-col p-3'>
        <div className='flex'>
          <div>
            <Image src={user.image_url} alt={user.username} width={'w-24'} height={'h-24'} />
          </div>
        </div>
        <div className='flex flex-col text-2xl flex-1'>
          <div className='flex w-full p-1 font-balsamiq'>
            {user.username}
          </div>
        </div>
      </Link>
    </>
  )
}