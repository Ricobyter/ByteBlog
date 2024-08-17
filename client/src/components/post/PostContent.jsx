import React from 'react';

// Function to add Tailwind CSS classes to HTML tags
const applyTailwindClasses = (htmlContent) => {
    return htmlContent.replace(/<p>/g, '<p class="text-lg font-light mb-2">')
    .replace(/<h1>/g, '<h1 class="text-4xl font-bold mb-1">')
    .replace(/<h2>/g, '<h2 class="text-3xl font-semibold mb-1">')
    .replace(/<h3>/g, '<h3 class="text-2xl font-semibold mb-1">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside pl-6 mb-2">')
    .replace(/<ol>/g, '<ol class="list-decimal list-inside pl-6 mb-2">')
    .replace(/<li>/g, '<li class="mb-1">')
    .replace(/<a href="/g, '<a class="text-blue-500 hover:underline" href="')
    .replace(/<\/p>/g, '</p>')
    .replace(/<\/h1>/g, '</h1>')
    .replace(/<\/h2>/g, '</h2>')
    .replace(/<\/h3>/g, '</h3>')
    .replace(/<\/ul>/g, '</ul>')
    .replace(/<\/ol>/g, '</ol>')
    .replace(/<\/li>/g, '</li>')
    .replace(/<\/a>/g, '</a>');
};

const PostContent = ({ content, image }) => {
  const styledContent = applyTailwindClasses(content);

  return (
    <div className='max-w-[750px] flex flex-col mt-8'>
      <img src={image} alt="Post Image" className='w-full' />
      <div
        className='flex flex-col gap-0 mt-8'
        dangerouslySetInnerHTML={{ __html: styledContent }}
      />
    </div>
  );
};

export default PostContent;
