import React, { useContext } from 'react'

import Heading from './../../components/Heading';
import helpers from './../../helpers';
import PostCard from './../../components/PostCard'
import Subheading from '../../components/Subheading';
import LoadableContent from '../../components/LoadableContent';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useBookmatesPostsQuery } from './../../api/queries/posts'
import CreateGinkSection from '../../components/CreateGinkSection';

const recentPosts = ({ posts }) => posts.map(post => {
    return <PostCard key={`${post.type}_${post.id}`} post={post} />
})

function HomePage() {
    const { currentUser } = useContext(CurrentUserContext);
    helpers.setPageTitle('Home')

    return (
        <>
            <Heading />
            <Subheading>
                <>
                    <div className='flex flex-col mt-24 gap-12 w-5/6 md:w-1/2'>
                        <LoadableContent hook={useBookmatesPostsQuery} params={currentUser.id}>
                            {recentPosts}
                        </LoadableContent>
                    </div>
                </>
            </Subheading>

            <CreateGinkSection currentUser={currentUser} />
        </>

    )
}
export default HomePage;
