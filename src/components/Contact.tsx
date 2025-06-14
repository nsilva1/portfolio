import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import { Loader } from "./Loader";


const Contact = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast.warning('Please fill in all fields.');
      setLoading(false);
      return;
    }
    
    // EmailJS config
    const serviceId = import.meta.env.VITE_serviceId
    const templateId = import.meta.env.VITE_templateId
    const publicKey = import.meta.env.VITE_publicKey

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }

    emailjs.send(serviceId, templateId, emailParams, publicKey)
      .then(() => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        toast.error('Failed to send message. Please try again later.');
      }).finally(() => {
        setLoading(false); // Reset loading state
      })
  };

  return (
    <section {...props} className='py-24 translate-y-4 transition-all duration-500'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-4'>Contact Me</h2>
        <p className='text-xl text-center text-gray-600 dark:text-gray-400 mb-8'>
          I'm always open to discussing new projects and opportunities. Feel free to reach out!
        </p>
        <form className='max-w-lg mx-auto' onSubmit={submitForm}>
          <fieldset disabled={loading} className='space-y-4'>
            <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-gray-300'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-gray-300'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className='mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-gray-300'
            ></textarea>
          </div>
          {
            loading ? (
              <div className="flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <button
            type='submit'
            className='w-full bg-primary text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-primary/80 cursor-pointer transition duration-200'
          >
            Send Message
          </button>
            )
          }
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export { Contact };
