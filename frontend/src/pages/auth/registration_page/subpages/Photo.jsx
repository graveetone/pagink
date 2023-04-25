import React from 'react'

import RegistrationFileInput from '../components/RegistrationPhotoInput'

import Header from './../../../../components/header/Header'

function Photo() {
  const description = (
    <>
      <span>Make your profile more recognizable</span>
      <span>Of course, you can skip this if you want to</span>
    </>
  )
  return (
    <>
      <Header subheading={"Please choose your best photo"} />
      <RegistrationFileInput name='photo' type='file' placeholder='photo' description={description} />
    </>
  )
}

export default Photo;
