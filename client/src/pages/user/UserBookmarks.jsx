import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { FaBookmark } from 'react-icons/fa';

const Bookmarks = () => {
  // Dummy data for bookmarks, replace with real data fetching logic
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: 'React Documentation', url: 'https://reactjs.org' },
    { id: 2, title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
    { id: 3, title: 'GitHub', url: 'https://github.com' },
  ]);

  useEffect(() => {
    // Fetch bookmarks from API or other sources
    // setBookmarks(fetchedBookmarks);
  }, []);

  return (
    <>
      <Header />
      <div className='flex justify-center items-center my-10 bg-gray-100 '>
        <div className='w-full max-w-3xl bg-white rounded-lg px-4 py-6  md:p-8'>
          <h1 className='text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center'>
            <FaBookmark className='mr-2 text-2xl text-gray-700' /> Bookmarks
          </h1>
          
          {bookmarks.length > 0 ? (
            <ul className='space-y-4'>
              {bookmarks.map((bookmark) => (
                <li key={bookmark.id} className='flex items-center justify-between p-3 bg-gray-100 rounded-md shadow-sm'>
                  <a 
                    href={bookmark.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='text-blue-500 hover:underline'
                  >
                    {bookmark.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-gray-600'>You have no bookmarks saved.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmarks;
