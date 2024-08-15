import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { createPost } from '../store/postSlice'; // Import the createPost thunk
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define mock categories for example
const categories = [
  'Technology',
  'Health',
  'Lifestyle',
  'Travel',
  'Education',
  'Business'
];

const cloud_name = import.meta.env.VITE_CLOUD_NAME; // Replace with your Cloudinary cloud name
const upload_preset = import.meta.env.VITE_UPLOAD_PRESET; // Replace with your Cloudinary upload preset

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.posts); // Access the status from Redux store

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Save the file for uploading
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageURL = "";

      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", upload_preset); // Include only the upload preset

        // Upload image to Cloudinary
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          { method: "POST", body: formData }
        );
        const imgData = await response.json();
        imageURL = imgData.secure_url; // Get the image URL
      }

      // Prepare the post data as a plain object
      const postData = {
        title,
        description,
        content,
        category, // Include the selected category
        image: imageURL || "", // Use image URL or empty string if no image
        author: "66b7a29393aa9bc912984606" // Replace with actual author ID
      };

      // Dispatch the createPost action
      await dispatch(createPost(postData)).unwrap();

      // Show success toast
      toast.success("Post created successfully!");

      // Reset form and state
      setTitle("");
      setDescription("");
      setContent("");
      setImage(null);
      setCategory("");
      setSearch("");
      setIsSubmitting(false);
    } catch (error) {
      console.error("Failed to create post:", error);
      toast.error("Failed to create post. Please try again.");
      setIsSubmitting(false);
    }
  };

  // Filter categories based on search input
  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="flex justify-center items-center py-10 min-h-screen">
        <div className="w-full max-w-3xl bg-white md:shadow-md rounded-lg py-8 px-6 md:p-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 font-platypi">
            Create New Post
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="title"
                className="text-gray-700 text-md font-medium font-lora"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder="Enter the post title"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="description"
                className="text-gray-700 text-md font-medium font-lora"
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                placeholder="Enter a short description"
                required
              />
            </div>
            <div className="relative flex flex-col gap-2">
              <label
                htmlFor="category"
                className="text-gray-700 text-md font-medium font-lora"
              >
                Category
              </label>
              <input
                id="category"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search categories"
                className="p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((cat) => (
                      <div
                        key={cat}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setCategory(cat);
                          setSearch(cat);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {cat}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500">No categories found</div>
                  )}
                </div>
              )}
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <div
                onClick={handleClick}
                className="w-full h-[380px] border border-gray-300 rounded-md flex items-center justify-center cursor-pointer bg-gray-100"
              >
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <p className="text-gray-500">Click to select an image</p>
                )}
              </div>
            </div>
            <ReactQuill
              theme={"snow"}
              value={content}
              onChange={setContent}
              className="mt-6 pb-4 font-platypi"
            />

            <button
              type="submit"
              className={`py-2 px-4 rounded-md text-white ${
                isSubmitting ? "bg-blue-400" : "bg-blue-500"
              } hover:bg-blue-600 transition`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Create Post"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default CreatePost;
