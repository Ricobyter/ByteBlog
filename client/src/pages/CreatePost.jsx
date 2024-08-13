import React, { useState } from 'react';
import Header from '../components/Header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUpload from '../components/ImageUpload'; // Import the ImageUpload component

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageSelect = (imageData) => {
    setImage(imageData);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with your API call logic
    setTimeout(() => {
      // Simulate a successful submission
      alert('Post created successfully!');
      setTitle('');
      setDescription('');
      setImage(null);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Header />
      <div className='flex justify-center items-center py-10  min-h-screen'>
        <div className='w-full max-w-3xl bg-white md:shadow-md rounded-lg py-8 px-6 md:p-8'>
          <h1 className='text-3xl font-semibold text-gray-800 mb-6 font-platypi'>Create New Post</h1>
          
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="title" className='text-gray-700 text-md font-medium font-lora'>Title</label>
              <input 
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg'
                placeholder='Enter the post title'
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="description" className='text-gray-700 text-md font-medium font-lora'>Description</label>
              <input 
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg'
                placeholder='Enter a short description'
                required
              />
            </div>
            <ImageUpload image={image} onImageSelect={handleImageSelect} />
            <ReactQuill theme={'snow'} className="mt-6 pb-4 font-platypi"/>

            <button 
              type="submit"
              className={`py-2 px-4 rounded-md text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-500'} hover:bg-blue-600 transition`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Create Post'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
