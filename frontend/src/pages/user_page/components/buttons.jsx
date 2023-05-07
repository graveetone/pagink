import Button from "../../../components/Button"
import icons from "../../../components/icons";
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { useContext } from "react";
import { useFollowUserMutation, useUnfollowUserMutation } from "../../../api/queries/users";

function UserButtons(user) {
  const { currentUser } = useContext(CurrentUserContext);
  const { mutateAsync: follow } = useFollowUserMutation(currentUser.id, user.id)
  const { mutateAsync: unfollow } = useUnfollowUserMutation(currentUser.id, user.id)

  const buttonsForAnotherUser = (
    <>
      {user.isFollowedByCurrentUser ? (
        <Button icon={icons.removeBookmate} onClick={() => unfollow()} />
      ) : (
        <Button icon={icons.addBookmate} onClick={() => follow()} />)
      }
      <Button icon={icons.books} href={`/shelves/${user.id}`} />
      <Button className='' icon={icons.block} caption={'Block'} />
      <Button icon={icons.message} />
    </>
  )

  const buttonsForCurrentUser = (
    <>
    </>
  )

  return user.isCurrentUser ? buttonsForCurrentUser : buttonsForAnotherUser;
}



export default UserButtons;
