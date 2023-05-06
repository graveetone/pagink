import React from 'react'
import helpers from '../../helpers'
import ShelveCard from './components/ShelveCard';
import LoadableContent from '../../components/LoadableContent';
import { useParams } from 'react-router-dom';
import { useShelvesQuery } from './../../api/queries/shelves';
import Heading from '../../components/Heading';
import Subheading from '../../components/Subheading';

const Shelves = ({ shelves, author }) => {
  helpers.setPageTitle(`Shelves by ${author.username}`)

  const shelvesAuthor = author;
  const linkToUserPage = helpers.createLinkTo(`/user/${shelvesAuthor.id}`, shelvesAuthor.username)
  return (
    <>
      <div className='flex flex-col gap-10'>
        <Heading>Shelves</Heading>
        <Subheading>
          {helpers.captionWithJsx('by', linkToUserPage)}
        </Subheading>

        <div className="flex flex-wrap justify-center w-full items-center gap-10">
          {shelves.map(shelve => {
            return <ShelveCard key={shelve.id} shelve={shelve} />
          })}
        </div>
      </div >
    </>
  )
}

function ShelvesPage() {
  const { userId } = useParams();

  return <LoadableContent hook={useShelvesQuery} params={userId}>
    {Shelves}
  </LoadableContent>
}

export default ShelvesPage;
