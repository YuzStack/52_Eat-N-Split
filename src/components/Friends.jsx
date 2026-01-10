import initialFriends from '../data-template';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import Friend from './Friend';
import { useState } from 'react';

function Friends() {
  const [friends, setFriends] = useState(initialFriends);
  const [isAddingFriend, setIsAddingFriend] = useState(false);

  const handleAddFriend = function (name, imageUrl) {
    setFriends(curFriends => [
      ...curFriends,
      {
        id: crypto.randomUUID(),
        name,
        image: imageUrl,
        balance: 0,
      },
    ]);

    handleToggleIsAddingFriend();
  };

  const handleToggleIsAddingFriend = function () {
    setIsAddingFriend(curStatus => !curStatus);
  };

  return (
    <div className='friends'>
      <ul>
        {friends.map(friend => (
          <Friend key={friend.id} {...friend} />
        ))}
      </ul>

      {isAddingFriend ? (
        <>
          <FormAddFriend onAddFriend={handleAddFriend} />
          <Button onClick={handleToggleIsAddingFriend}>Close</Button>
        </>
      ) : (
        <Button onClick={handleToggleIsAddingFriend}>Add friend</Button>
      )}
    </div>
  );
}

export default Friends;
