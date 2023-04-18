import React from 'react'
import { data } from './data'
import { setPageTitle } from '../../helpers'
import ShelvesHeader from './components/ShelvesHeader';
import ShelveCard from './components/ShelveCard';

function ShelvesPage() {
  setPageTitle(`Shelves by ${data.author.username}`)
  return (
    <>
      <ShelvesHeader author={data.author} />
      <div className="flex flex-wrap justify-center w-full items-center">
        <ShelveCard shelve={data.shelves[0]}/>
        <ShelveCard shelve={data.shelves[2]}/>
        <ShelveCard shelve={data.shelves[3]}/>
      </div>
    </>
  )
}

export default ShelvesPage;
