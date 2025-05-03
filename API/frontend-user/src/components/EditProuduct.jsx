import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [user, setUSer] = useState({ name: "", age: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:2000/user/single/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const editUser = () => {
    axios
      .put(`http://localhost:2000/user/update/${id}`, user)
      .then((res) => navigate("/admin/users"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    value={user.name}
                    onChange={(e) =>
                      setUser({ ...user, name: e.target.value })
                    }
                  />
                  <label htmlFor="formId1">Product Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="formId1"
                    id="formId1"
                    placeholder=""
                    value={user.amt}
                    onChange={(e) =>
                      setProduct({ ...user, age: e.target.value })
                    }
                  />
                  <label htmlFor="formId1">Price</label>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editUser()}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
