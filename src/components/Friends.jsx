import initialFriends from '../data-template';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import Friend from './Friend';

function Friends() {
  return (
    <div className='friends'>
      <ul>
        {initialFriends.map(friend => (
          <Friend key={friend.id} {...friend} />
        ))}
      </ul>
      <Button>Add friend</Button>
      {/* <>
        <FormAddFriend />
        <Button>Close</Button>
      </> */}
    </div>
  );
}

export default Friends;
