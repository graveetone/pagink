import React from 'react'

import RegistrationFileInput from '../components/RegistrationPhotoInput'

import Subheading from '../../../../components/Subheading'

function Photo() {
  const description = (
    <>
      <span>Make your profile more recognizable</span>
      <span>Of course, you can skip this if you want to</span>
    </>
  )
  return (
    <>
      <Subheading>
        Please choose your best photo
      </Subheading>
      <RegistrationFileInput name='photo' type='file' placeholder='photo' description={description} />
    </>
  )
}

export default Photo;
