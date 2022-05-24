import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted');
  };
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" />
        <input type="password" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
