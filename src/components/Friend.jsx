import Button from './Button';

function Friend({
  id,
  name,
  image,
  balance,
  selectedFriend,
  onSelectFriend,
  onDeselectFriend,
}) {
  const isSelected = selectedFriend?.id === id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 ? (
        <p className='red'>{`You owe ${name} ${Math.abs(balance)}€`}</p>
      ) : balance > 0 ? (
        <p className='green'>{`${name} owes you ${Math.abs(balance)}€`}</p>
      ) : (
        <p>{`You and ${name} are even`}</p>
      )}
      <Button onClick={() => isSelected ? onDeselectFriend() : onSelectFriend(id)}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}

export default Friend;
