// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import BooksSection from '../components/BooksSection';

// const Books = () => {
//     const[Data,setData]= useState();
    
//     useEffect(()=>{
//         const fetch = async ()=>{
//             await axios
//             .get("http://localhost:3000/api/v1/getBooks")
//             .then((res)=> setData(res.data.books))
//         };
//         fetch();
//     })
//   return (
//     <div className="bd-dark"  style={{minHeight:"91.5vh"}}>
//     <div className="d-flex justify-content-center align-item-center py-3 ">
//       <h4 className=''>Book Section</h4>
      
//     </div>
//     {Data ?(
//         <BooksSection data={Data}/>
//     ):(
//        <div>Loading....</div>
//        )}
//     </div>
//   )
// }

// export default Books
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BooksSection from '../components/BooksSection';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books from backend
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/getBooks");
      setBooks(res.data.books);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete handler
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/deleteBook/${id}`);
      setBooks(prev => prev.filter(book => book._id !== id));
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="bd-dark text-white" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
        <h4>Book Section</h4>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <BooksSection data={books} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Books;

