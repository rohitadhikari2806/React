// import React from "react";

// const BooksSection = ({ data }) => {
//   console.log(data);

//   return (
//     <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
//       {data &&
//         data.map((item, index) => (
//           <div
//             className="m-3"
//             style={{
//               width: "200px",
//               height: "350px",
//               border : "1px solid white",
//               borderRadius: "20px",
              
//             }}
//           >
//             <div>
//               <img
//                 style={{ width: "200px", height: "210px" , borderTopLeftRadius:"20px",borderTopRightRadius:"20px" }}
//                 className="img-fluid"
//                 src={item.image}
//                 alt="/"
//               />
//             </div>

//             <h6 style={{fontSize:"15px"}} className="text-white px-2 my-1">{item.bookname.slice(0,20)}...</h6>
//             <b style={{fontSize:"30px" , color:"red" }} className=" px-2">Rs. {item.price}</b>
//             <div className="d-flex justify-content-around align-items-center my-2 ">
//             <button className="btn btn-primary">Update</button>
//             <button className="btn btn-danger"> Delete</button>
//             </div>

//           </div>
//         ))}
//     </div>
//   );
// };

// export default BooksSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BooksSection = ({ data, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/deleteBook/${id}`);
      onDelete(id); // inform parent to update UI
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap my-3">
      {data &&
        data.map((item, index) => (
          <div
            key={item._id || index}
            className="m-3"
            style={{
              width: "200px",
              height: "350px",
              border: "1px solid white",
              borderRadius: "20px",
            }}
          >
            <div>
              <img
                style={{
                  width: "200px",
                  height: "210px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                className="img-fluid"
                src={item.image}
                alt={item.bookname}
              />
            </div>

            <h6 style={{ fontSize: "15px" }} className="text-white px-2 my-1">
              {item.bookname.slice(0, 20)}...
            </h6>
            <b style={{ fontSize: "30px", color: "red" }} className="px-2">
              Rs. {item.price}
            </b>
            <div className="d-flex justify-content-around align-items-center my-2">
              <button
                className="btn btn-primary"
                onClick={() => handleUpdate(item._id)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;

