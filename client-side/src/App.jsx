import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (id, value) => {
    setQuantities({
      ...quantities,
      [id]: Number(value),
    });
  };

  const handleUpdate = async () => {
    const updates = Object.entries(quantities).map(([productId, quantity]) => ({
      productId,
      quantity,
    }));

    try {
      await axios.post(
        "http://localhost:5000/api/products/bulk-update-stock",
        updates,
      );

      setQuantities({});
      fetchProducts();
    } catch (err) {
      alert(err.response?.data?.error || "Error updating stock");
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Admin Dashboard
      </h1>

      {products.map((p) => (
        <div key={p._id} className="product-card">
          <div>
            <strong>{p.name}</strong>
            <br />
            <small>
              Price: ${p.price} | Stock: {p.stock}
            </small>
          </div>

          <input
            type="number"
            placeholder="Qty"
            value={quantities[p._id] || ""}
            onChange={(e) => handleChange(p._id, e.target.value)}
          />
        </div>
      ))}

      <button onClick={handleUpdate}>Update Stock</button>
    </div>
  );
}

export default App;
