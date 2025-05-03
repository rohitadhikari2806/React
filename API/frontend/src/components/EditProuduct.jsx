import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: "", amt: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:2000/product/single/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const editProduct = () => {
    axios
      .put(`http://localhost:2000/product/update/${id}`, product)
      .then((res) => navigate("/admin/products"))
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
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
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
                    value={product.amt}
                    onChange={(e) =>
                      setProduct({ ...product, amt: e.target.value })
                    }
                  />
                  <label htmlFor="formId1">Price</label>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editProduct()}
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
