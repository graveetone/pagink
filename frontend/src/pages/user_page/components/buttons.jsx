import Button from "../../../components/Button"
import icons from "../../../components/icons";
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { useContext } from "react";

function UserButtons(user) {
  const { currentUser } = useContext(CurrentUserContext);

  const buttonForAnotherUser = (
    <>
      <Button caption={'Add bookmate'} icon={icons.add_bookmate} />
      <Button className='' icon={icons.block} caption={'Block'} />
      <Button caption={'Send private message'} icon={icons.message} />
    </>
  )

  const buttonsForCurrentUser = (
    <>
      <Button caption={`Go to ${user.username}'s shelves`} icon={icons.books} href={`/shelves/${user.id}`} />
      <Button caption={`Edit profile`} icon={icons.edit} />
    </>
  )

  const userIsCurrentUser = user.id === currentUser.id; // TODO: pass this to backend to get as field of response

  return userIsCurrentUser ? buttonsForCurrentUser : buttonForAnotherUser;
}

export default UserButtons;
