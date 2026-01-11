import FormAddFriend from './FormAddFriend';
import Button from './Button';
import Friend from './Friend';

function FriendsList({
  friends,
  isAddingFriend,
  onAddFriend,
  onClick,
  selectedFriend,
  onSelectFriend,
  onDeselectFriend,
}) {
  return (
    <div className='friends-list'>
      <ul>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            {...friend}
            selectedFriend={selectedFriend}
            onSelectFriend={onSelectFriend}
            onDeselectFriend={onDeselectFriend}
          />
        ))}
      </ul>

      {isAddingFriend && <FormAddFriend onAddFriend={onAddFriend} />}

      <Button onClick={onClick}>
        {isAddingFriend ? 'Close' : 'Add friend'}
      </Button>
    </div>
  );
}

export default FriendsList;
