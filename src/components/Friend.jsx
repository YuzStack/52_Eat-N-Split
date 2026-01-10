import Button from './Button';

function Friend({ id, name, image, balance, selectedFriend, onSelectFriend }) {
  return (
    <li className={selectedFriend?.id === id ? 'selected' : ''}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 ? (
        <p className='red'>{`You owe ${name} ${Math.abs(balance)}€`}</p>
      ) : balance > 0 ? (
        <p className='green'>{`${name} owes you ${Math.abs(balance)}€`}</p>
      ) : (
        <p>{`You and ${name} are even`}</p>
      )}
      <Button onClick={() => onSelectFriend(id)}>Select</Button>
    </li>
  );
}

export default Friend;
