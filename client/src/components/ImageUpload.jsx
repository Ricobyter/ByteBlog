import React, { useRef, useState } from 'react';

const ImageUpload = ({ image, onImageSelect }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <div
        onClick={handleClick}
        className="w-full h-[380px] border border-gray-300  rounded-md flex items-center justify-center cursor-pointer bg-gray-100"
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <p className="text-gray-500">Click to select an image</p>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
