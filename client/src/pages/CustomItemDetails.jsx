import React, { useEffect, useState } from "react";
import { getCustomItem } from "../services/CustomItemAPI";
import { useParams, Link } from "react-router-dom";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await getCustomItem(id);
      setItem(data);
    };
    fetchItem();
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Price: ${item.price}</p>
      <pre>Features: {JSON.stringify(item.features, null, 2)}</pre>
      <Link to={`/edit/${item.id}`}>Edit Item</Link>
      <Link to="/all">Back to All Items</Link>
    </div>
  );
}
