import React, { useState, useRef, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';

import helpers from '../../helpers';
import Button from '../../components/Button';
import icons from '../../components/icons';
import CommentsSection from '../../components/comments_section/CommentsSection';
import Image from '../../components/Image';
import Heading from './../../components/Heading'
import LoadableContent from './../../components/LoadableContent'
import { useGinkQuery, useGinkCommentsQuery } from './../../api/queries/ginks'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import CreateCommentSection from './../../components/CreateCommentSection'
import LikeButton from '../../components/LikeButton';

function GinkPage() {
    const ginkId = parseInt(useParams().ginkId);


    const ginkRef = useRef()
    const commentsSectionRef = useRef()

    const [liked, setLiked] = useState(false)

    const scrollToStart = () => {
        ginkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToComments = () => {
        commentsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const { currentUser } = useContext(CurrentUserContext);

    return (
        <>
            <LoadableContent hook={useGinkQuery} params={ginkId}>
                {(gink) => {
                    {
                        { helpers.setPageTitle(`Gink by ${gink.author.username}`) }
                        setLiked(gink.likedByCurrentUser)
                    }
                    return <div ref={ginkRef} className='flex flex-col gap-10 justify-center items-center w-full'>
                        <Heading>
                            <span>
                                {gink.title}
                            </span>
                        </Heading>
                        <div className='flex flex-col items-center justify-center gap-12 w-full'>
                            <div className='flex flex-col w-full justify-center gap-6'>
                                <div className='flex flex-col w-full font-balsamiq gap-6'>
                                    <Link to={`/user/${gink.author.id}`} className='w-full'>
                                        <Image src={gink.author.image_url} alt={gink.author.username} width={'w-56'} height={'h-56'} />
                                    </Link>
                                    <div className='flex flex-col w-full gap-3 text-center'>
                                        <span className='text-3xl'>{helpers.jsxWithCaption(helpers.createLinkTo(`/user/${gink.author.id}`, gink.author.username), 'wrote')}</span>
                                        <span className='text-xl '>{`${gink.timestamp}`}</span>
                                    </div>
                                </div>
                                <div className='flex justify-around items-center'>
                                    <LikeButton isLiked={gink.likedByCurrentUser} caption={gink.likesCount} likeableData={{
                                        likeable_id: gink.id,
                                        likeable_type: 'Gink'
                                    }}
                                        queriesToInvalidate={[['ginks']]}

                                    />
                                    <div>
                                        <Button icon={<>{gink.commentsCount} {icons.comments}</>} onClick={scrollToComments} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full px-6'>
                                <p className='font-roboto xs:text-2xl sm:text-3xl text-gray-900 text-center leading-relaxed tracking-wider'>
                                    {gink.text}
                                </p>
                            </div>
                        </div>
                        <CreateCommentSection commentable={{ commentable_id: gink.id, commentable_type: 'Gink' }} />

                        <LoadableContent hook={useGinkCommentsQuery} params={gink.id} subLoader={true}>
                            {CommentsSections}
                        </LoadableContent>

                        <div ref={commentsSectionRef} className='flex justify-end items-end'>
                            <Button icon={icons.arrowUp} onClick={scrollToStart} />
                        </div>
                    </div >
                }}
            </LoadableContent>

        </>
    )
}

export default GinkPage;

const CommentsSections = (gink) => {
    return <div className="flex flex-col justify-center w-full items-center gap-10">
        {<CommentsSection comments={gink?.comments} />}
    </div>
}
