import Button from './Button';

function FormSplitBill({ selectedFriend }) {
  return (
    <form className='form-split-bill'>
      <h2>Split Bill with {selectedFriend.name}</h2>

      <label htmlFor='bill-value'>💰 Bill value</label>
      <input type='number' id='bill-value' autoFocus />

      <label htmlFor='user-expense'>🧍 Your expense</label>
      <input type='number' id='user-expense' />

      <label htmlFor='friend-expense'>👬 {selectedFriend.name}'s expense</label>
      <input type='number' id='friend-expense' disabled />

      <label htmlFor='bill-payer'>🤑 Who is paying the bill?</label>
      <select id='bill-payer'>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
