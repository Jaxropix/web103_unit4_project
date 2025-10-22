import React, { useEffect, useState } from "react";
import { getAllCustomItems, deleteCustomItem } from "../services/CustomItemAPI";
import { Link } from "react-router-dom";

export default function AllItems() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await getAllCustomItems();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    await deleteCustomItem(id);
    fetchItems(); // refresh list
  };

  return (
    <div>
      <h1>All Custom Items</h1>
      <Link to="/create">Create New Item</Link>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/details/${item.id}`}>{item.name}</Link> - ${item.price}
            <Link to={`/edit/${item.id}`}>Edit</Link>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
