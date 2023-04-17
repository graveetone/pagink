import Raiting from '../../../components/Raiting/Raiting'


function BookCard({ book }) {
    return (
        <a href="/book" className="flex xs:w-full sm:w-3/4 md:w-1/2 justify-around m-3 p-5 border-2 border-gray-400 rounded-3xl bg-gray-300 min-h-32">
            <div className="flex justify-center items-center w-1/2 sm:w-3/4 md:w-1/4">
                <div className='object-cover'>
                    <img src={book.image_url} alt={book.title} className="rounded-tl-2xl rounded-bl-2xl rounded-br-3xl sm:w-3/4 md:w-full h-auto" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center xs:w-1/2 w-1/2 sm:w-2/4 break-words">
                <p className="xs:text-lg sm:text-xl md:text-2xl text-center mb-2 w-full break-words">{book.title}</p>
                <Raiting raiting={book.raiting} />
            </div>
        </a>

    )
}

export default BookCard;
