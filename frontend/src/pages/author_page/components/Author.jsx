import Image from '../../../components/Image'
import Heading from '../../../components/Heading'
import helpers from '../../../helpers'

const Author = (author) => {
  helpers.setPageTitle(author.name)

  return (
    <>
      <div className='flex flex-col w-full items-center gap-5'>
        <Heading>
          {author.name}
        </Heading>

        <Image src={author.image_url} alt={author.name} width={'w-72'} height={'h-72'} />
      </div>
    </>
  )

}

export default Author;
