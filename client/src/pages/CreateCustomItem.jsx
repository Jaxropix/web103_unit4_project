import React, { useState } from "react";
import { createCustomItem } from "../services/CustomItemAPI";
import { useNavigate } from "react-router-dom";

export default function CreateItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [features, setFeatures] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCustomItem({ name, price, features });
    navigate("/all"); // go back to list
  };

  return (
    <div>
      <h1>Create Custom Item</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
        <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} placeholder="Price" required />
        <textarea
            value={JSON.stringify(features, null, 2)}
            onChange={e => {
                try {
                setFeatures(JSON.parse(e.target.value));
                } catch (err) {
                // ignore parse errors while typing
                }
            }}
            placeholder="Features as JSON"
            />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
