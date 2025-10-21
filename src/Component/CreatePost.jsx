import React, { useState, useEffect } from "react";
import { Button, CircularProgress, Input } from "@nextui-org/react";
import axios from "axios";
import url from "../backendurl";
import { useOutletContext } from "react-router-dom";

const CreatePost = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useOutletContext();

  const categories = [
    "Programming", "Web Development", "Artificial Intelligence",
    "Data Science", "Technology", "Security", "Healthcare",
    "Business", "Ethics", "Finance"
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSizeMB = 1;
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      alert(`Image is too large. Maximum size allowed is ${maxSizeMB} MB.`);
      return;
    }

    setImageFile(file);
    setImagePreviewUrl(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData?.author_id) {
      alert("Author ID missing");
      return;
    }

    const formData = new FormData();
    formData.append("post_title", title);
    formData.append("post_body", content);
    formData.append("category", category);
    formData.append("author_id", userData.author_id);
    formData.append("date", new Date().toISOString());

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      setIsLoading(true);
      const response = await axios.post(`${url}/createblog`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Blog created!");
      setTitle("");
      setContent("");
      setCategory("");
      setImageFile(null);
      setImagePreviewUrl(null);
    } catch (error) {
      console.error(error);
      alert("Failed to create blog");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full pt-14 h-dvh">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <form
        className="w-[95%] sm:w-[80%] lg:w-[75%] p-4 border rounded-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 text-3xl font-bold text-center">Create New Post</h1>

        <div className="mb-4">
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Post Title"
            label="Title"
            fullWidth
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            className="min-h-[150px] w-full p-4 border rounded-lg"
            placeholder="Description"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imageInput" className="p-2 border-2 cursor-pointer">
            Select Image
            <input
              type="file"
              name="image"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          {imagePreviewUrl && (
            <div className="mt-4">
              <img
                src={imagePreviewUrl}
                alt="Preview"
                className="object-cover w-full h-auto"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="" disabled>Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
