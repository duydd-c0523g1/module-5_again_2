import { useEffect, useState } from "react";
import { getAllProducts, searchName } from "../service/ProductService";
import { Link } from "react-router-dom";

export default function () {
  const [productList, setProductList] = useState([]);
  const [name, setName] = useState("");

  // useEffect(() => {
  //   getAll();
  // }, []);

  const getAll = async () => {
    let temp = await getAllProducts();
    setProductList(temp);
  };

  useEffect(() => {
    search();
  }, [name])

  const search = async () => {
      const temp = await searchName(name);
      setProductList(temp)
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <h1>Product List</h1>
        </div>
        <div className="col">
          <label htmlFor="searchName">Search Product: </label>
          <input value={name} onChange={(evt) => setName(evt.target.value)}/>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
