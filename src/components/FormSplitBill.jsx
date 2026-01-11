import { useState } from 'react';
import Button from './Button';

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [billValue, setBillValue] = useState('');
  const [userExpense, setUserExpense] = useState('');
  const [billPayer, setBillPayer] = useState('user');

  const friendExpense = billValue ? billValue - userExpense : '';

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!billValue || !userExpense) return;

    onSplitBill(billPayer === 'user' ? friendExpense : -userExpense);

    
  };

  return (
    <form onSubmit={handleSubmit} className='form-split-bill'>
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label htmlFor='bill-value'>💰 Bill value</label>
      <input
        type='number'
        id='bill-value'
        autoFocus
        value={billValue}
        onChange={e => setBillValue(Number(e.target.value))}
      />

      <label htmlFor='user-expense'>🧍 Your expense</label>
      <input
        type='number'
        id='user-expense'
        value={userExpense}
        onChange={e =>
          setUserExpense(
            Number(e.target.value) > billValue
              ? userExpense
              : Number(e.target.value)
          )
        }
      />

      <label htmlFor='friend-expense'>👬 {selectedFriend.name}'s expense</label>
      <input type='number' id='friend-expense' disabled value={friendExpense} />

      <label htmlFor='bill-payer'>🤑 Who is paying the bill?</label>
      <select
        id='bill-payer'
        value={billPayer}
        onChange={e => setBillPayer(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
