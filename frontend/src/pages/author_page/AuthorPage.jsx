import React from 'react'
import { useParams } from 'react-router-dom'

import { useAuthorQuery, useAuthorBooksQuery } from './../../api/queries/authors'
import LoadableContent from '../../components/LoadableContent'
import Author from './components/Author'
import AuthorBooks from './components/AuthorBooks'

function AuthorPage() {
  const authorId = parseInt(useParams().authorId);


  return (
    <div className='flex flex-col w-full items-center gap-5'>
      <LoadableContent hook={useAuthorQuery} params={authorId}>
        {Author}
      </LoadableContent >

      <LoadableContent hook={useAuthorBooksQuery} params={authorId} subLoader={true}>
        {AuthorBooks}
      </LoadableContent>
    </div>
  );
}

export default AuthorPage;
