import Button from './Button';

function SplitBill({ name }) {
  return <FormSplitBill />;
}

function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split Bill with Anthony</h2>

      <label htmlFor='bill-value'>💰 Bill value</label>
      <input type='text' id='bill-value' />

      <label htmlFor='your-expense'>🧍 Your expense</label>
      <input type='text' id='your-expense' />

      <label htmlFor='friend-expense'>👬 Anthony's expense</label>
      <input type='text' id='friend-expense' />

      <label htmlFor='bill-payer'>🤑 Who is paying the bill?</label>
      <select id='bill-payer'>
        <option value='you'>You</option>
        <option value='friend'>Anthony</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default SplitBill;
