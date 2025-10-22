import React, { useEffect, useState } from "react";
import { getCustomItem, updateCustomItem } from "../services/CustomItemAPI";
import { useParams, useNavigate } from "react-router-dom";

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [features, setFeatures] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getCustomItem(id);
      if (item) {
        setName(item.name);
        setPrice(item.price);
        setFeatures(item.features);
      }
    };
    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCustomItem(id, { name, price, features });
    navigate(`/details/${id}`);
  };

  return (
    <div>
      <h1>Edit Custom Item</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} required />
        <textarea value={JSON.stringify(features)} onChange={e => setFeatures(JSON.parse(e.target.value))} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
