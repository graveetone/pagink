import React from 'react'
import { data } from './data'
import { setPageTitle, createLinkTo, CaptionWithJsx } from '../../helpers'
import ShelveCard from './components/ShelveCard';
import Header from '../../components/Header/Header'

function ShelvesPage() {
  setPageTitle(`Shelves by ${data.author.username}`)
  const linkToUserPage = createLinkTo('/user', data.author.username)
  return (
    <>
      <div className='flex flex-col gap-10'>
        <Header heading={'Shelves'} subheading={CaptionWithJsx('by', linkToUserPage)}> </Header>

        <div className="flex flex-wrap justify-center w-full items-center gap-10">
          <ShelveCard shelve={data.shelves[0]} />
          <ShelveCard shelve={data.shelves[2]} />
          <ShelveCard shelve={data.shelves[3]} />
        </div>
      </div >
    </>
  )
}

export default ShelvesPage;
