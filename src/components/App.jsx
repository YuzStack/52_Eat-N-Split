import initialFriends from '../data-template';
import Friends from './Friends';
import SplitBill from './SpiltBill';
import { useState } from 'react';

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

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

  const handleSelectFriend = function (id) {
    setSelectedFriend(friends.find(friend => friend.id === id));
  };

  return (
    <div className='app'>
      <Friends
        friends={friends}
        isAddingFriend={isAddingFriend}
        onAddFriend={handleAddFriend}
        onClick={handleToggleIsAddingFriend}
        selectedFriend={selectedFriend}
        onSelectFriend={handleSelectFriend}
      />
      <SplitBill selectedFriend={selectedFriend} />
    </div>
  );
}

export default App;
