import Button from "../../../components/Button"
import icons from "../../../components/icons";

const buttons = (user) => (
  <>
    <Button caption={'Add bookmate'} icon={icons.add_bookmate} />
    <Button className='' icon={icons.block} caption={'Block'} />
    <Button caption={'Send private message'} icon={icons.message} />
    <Button caption={`Go to ${user.username}'s shelves`} icon={icons.books} href='/shelves' />
    <Button caption={`Edit profile`} icon={icons.edit} />
  </>
)

export default buttons;
