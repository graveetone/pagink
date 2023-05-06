import BooksSection from "../../../components/books_section/BooksSection"

const AuthorBooks = ({ books, count }) => {
    return <BooksSection caption={`Books by this author (${count})`} books={books} />
}

export default AuthorBooks;
