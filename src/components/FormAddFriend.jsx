import Button from './Button';

function FormAddFriend() {
  return (
    <div>
      <form className='form-add-friend'>
        <label htmlFor='friend-name'>👬 Friend name</label>
        <input type='text' id='friend-name' />
        <label htmlFor='image-url'>🌄 Image URL</label>
        <input type='text' id='image-url' />
        <Button>Add</Button>
      </form>
    </div>
  );
}

export default FormAddFriend;
