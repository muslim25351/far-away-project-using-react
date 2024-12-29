import { useState } from "react";

export default function PackingList({ itemm, onDelete, onToggle, onClick }) {
  const [sortby, setSortby] = useState("input");
  let sortedItems;
  if (sortby === "input") sortedItems = itemm;
  if (sortby === "description")
    sortedItems = itemm
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortedItems = itemm
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              items={item}
              onDelete={onDelete}
              key={item.id}
              onToggle={onToggle}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
            <option value="input">sort by input</option>
            <option value="description">sort by discription</option>
            <option value="packed">sort by packed </option>
          </select>
          <button onClick={onClick}>clear</button>
        </div>
      </div>
    </>
  );
}
function Item({ items, onDelete, onToggle }) {
  return (
    <>
      <li>
        <input
          type="checkBox"
          value={items.packed}
          onChange={() => onToggle(items.id)}
        />
        <span style={items.packed ? { textDecoration: "line-through" } : {}}>
          {items.quantity} {items.description}
        </span>

        <button onClick={() => onDelete(items.id)}>❌</button>
      </li>
    </>
  );
}
