import initialFriends from '../data-template';
import FriendsList from './FriendsList';
import FormSplitBill from './FormSplitBill';
import { useState } from 'react';

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = function (friend) {
    setFriends(curFriends => [...curFriends, friend]);

    handleToggleIsAddingFriend();
  };

  const handleToggleIsAddingFriend = function () {
    setIsAddingFriend(curStatus => !curStatus);
  };

  const handleSelectFriend = function (id) {
    setSelectedFriend(friends.find(friend => friend.id === id));
    setIsAddingFriend(false);

    // Alternatively using this same function for both selection and deselection
    /* setSelectedFriend(curSelectedFriend =>
      curSelectedFriend?.id === id
        ? null
        : friends.find(friend => friend.id === id)
    ); */
  };

  const handleDeselectFriend = function () {
    setSelectedFriend(null);
  };

  const handleSplitBill = function (value) {
    setFriends(curFriends =>
      curFriends.map(friend =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );

    setSelectedFriend(null);
  };

  return (
    <div className='app'>
      <FriendsList
        friends={friends}
        isAddingFriend={isAddingFriend}
        onAddFriend={handleAddFriend}
        onClick={handleToggleIsAddingFriend}
        selectedFriend={selectedFriend}
        onSelectFriend={handleSelectFriend}
        onDeselectFriend={handleDeselectFriend}
      />

      {selectedFriend ? (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      ) : null}
    </div>
  );
}

export default App;
