import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    bookname: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(`http://localhost:3000/api/v1/getBooks/${id}`);
      setBookData(res.data.book);
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/v1/updateBooks/${id}`, bookData);
    navigate('/');
  };

  return (
    <div className="container py-4">
      <h3>Update Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="bookname"
          value={bookData.bookname}
          onChange={handleChange}
          placeholder="Book Name"
          className="form-control my-2"
        />
        <input
          name="price"
          value={bookData.price}
          onChange={handleChange}
          placeholder="Price"
          className="form-control my-2"
        />
        <input
          name="image"
          value={bookData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="form-control my-2"
        />
        <button className="btn btn-success">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
