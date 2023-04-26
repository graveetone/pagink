import React from 'react'
import Header from '../../components/header/Header'
import { data } from './data'

function MainLogoutPage() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-6'>
        <Header subheading={"Your bookshelf, your thoughts, your community"} />
        <div className='flex flex-col gap-12 justify-center items-center font-roboto p-3 text-center'>
          <p className='text-3xl md:text-5xl'><b>{data.users_count}</b> users already joined us</p>
          <p className='text-xl md:text-3xl'>They have already read <b>{data.books_read}</b> books</p>
          <p className='text-md md:text-2xl'>and have written <b>{data.texts_count}</b> reviews, ginks and comments </p>
        </div>
        <div className='flex flex-col text-lg text-center'>
          <p>Don't you know what gink is?</p>
          <p>What are you waiting for?</p>
          <p><a href='/sign_up'><b>Join Us Now</b></a></p>
        </div>
      </div>
    </>
  )
}

export default MainLogoutPage;
