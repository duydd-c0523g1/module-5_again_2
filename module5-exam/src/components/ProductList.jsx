import { useEffect, useState } from "react";
import { getAllProducts, searchName, deleteProducts } from "../service/ProductService";
import { Link } from "react-router-dom";

export default function () {
  const [productList, setProductList] = useState([]);
  const [name, setName] = useState("");
  const [productDelete, setProductDelete] = useState({});

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    let temp = await getAllProducts();
    setProductList(temp);
  };

  useEffect(() => {
    search();
  }, [name, productList]);

  const search = async () => {
    const temp = await searchName(name);
    setProductList(temp);
  };

  const removeProduct = async () => {
      await deleteProducts(productDelete);
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>Product List</h1>
        </div>
        <div className="col">
          <Link to="/create">
            <button className="btn btn-success">Create Product</button>
          </Link>
        </div>
        <div className="col">
          <label htmlFor="searchName">Search Product: </label>
          <input value={name} onChange={(evt) => setName(evt.target.value)} />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Import Date</th>
                <th>Quantity</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.importDate}</td>
                  <td>{product.quantity}</td>
                  <td>{product.type}</td>
                  <td>
                    <Link to={"update/" + product.id}>
                      <button className="btn btn-warning">Update</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setProductDelete(product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Delete Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Bạn có muốn xóa sản phẩm có id là {productDelete.id} và có title là{productDelete.name}?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={removeProduct}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
