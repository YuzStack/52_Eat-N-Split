import FormAddFriend from './FormAddFriend';
import Button from './Button';
import Friend from './Friend';

function Friends({
  friends,
  isAddingFriend,
  onAddFriend,
  onClick,
  selectedFriend,
  onSelectFriend,
}) {
  return (
    <div className='friends'>
      <ul>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            {...friend}
            selectedFriend={selectedFriend}
            onSelectFriend={onSelectFriend}
          />
        ))}
      </ul>

      {isAddingFriend ? (
        <>
          <FormAddFriend onAddFriend={onAddFriend} />
          <Button onClick={onClick}>Close</Button>
        </>
      ) : (
        <Button onClick={onClick}>Add friend</Button>
      )}
    </div>
  );
}

export default Friends;
