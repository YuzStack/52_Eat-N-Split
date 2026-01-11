import { useState } from 'react';
import Button from './Button';

function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState('');
  const [imageUrl, setImageUrl] = useState(
    `https://i.pravatar.cc/48?u=${crypto.randomUUID()}`
  );

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!friendName.trim() || !imageUrl.trim()) return;

    const newFriend = {
      id: crypto.randomUUID(),
      name: friendName,
      Image: imageUrl,
      balance: 0,
    };

    onAddFriend(newFriend);
    setFriendName('');
    setImageUrl(`https://i.pravatar.cc/48?u=${crypto.randomUUID()}`);
  };

  return (
    <form onSubmit={handleSubmit} className='form-add-friend'>
      <label htmlFor='friend-name'>👬 Friend name</label>
      <input
        type='text'
        id='friend-name'
        autoFocus
        value={friendName}
        onChange={e => setFriendName(e.target.value)}
      />
      <label htmlFor='image-url'>🌄 Image URL</label>
      <input
        type='text'
        id='image-url'
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
