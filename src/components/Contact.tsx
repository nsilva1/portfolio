import { useState } from 'react';
import styles from '../styles';
import axios from 'axios';

const Contact = () => {
  const [localState, setLocalState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [disabled, setDisabled] = useState(false);

  const handleChange = (input: string) => (e: any) => {
    setLocalState({
      ...localState,
      [input]: e.target.value,
    });
  };

  const sendMessage = async (e: any) => {
    e.preventDefault();

    if (
      localState.name.trim() === '' ||
      localState.email.trim() === '' ||
      localState.message.trim() === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    setDisabled(true);

    const url = 'https://getform.io/f/f7c90408-ab8b-4154-aee2-5ef6adeb0edb';

    try {
      await axios.post(url, localState, {
        headers: { Accept: 'application/json' },
      });
      alert('Message sent successfully');
      setLocalState({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.log(error);
      alert('Error sending message. Please try again later.');
    } finally {
      setDisabled(false);
    }
  };

  return (
    <section id='contact' className='mb-10'>
      <div>
        <div className='text-center py-6'>
          <h2 className={styles.heading2}>Contact</h2>
          <p className={styles.paragraph}>Get in touch with me</p>
        </div>

        <div className={styles.flexCenter}>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Name'
                  className='input input-bordered'
                  value={localState.name}
                  onChange={handleChange('name')}
                  disabled={disabled}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='Email'
                  placeholder='Email'
                  className='input input-bordered'
                  value={localState.email}
                  onChange={handleChange('email')}
                  disabled={disabled}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Message</span>
                </label>
                <textarea
                  className='textarea textarea-bordered'
                  placeholder='Message'
                  rows={5}
                  value={localState.message}
                  onChange={handleChange('message')}
                  disabled={disabled}
                ></textarea>
              </div>
              <div className='form-control mt-6'>
                <button
                  onClick={sendMessage}
                  className='btn btn-primary duration-200 hover:scale-105'
                  disabled={disabled}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
