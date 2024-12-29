import { useState } from "react";
import "./index.css";
import Loggo from "./Loggo";
import Form from "./Form";
import PackingList from "./package";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
interface Items {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export default function App() {
  const [items, setItems] = useState<Items[]>([]);

  function handleAdd(item: Items) {
    setItems(() => [...items, item]);
  }
  function handleDelete(id: number) {
    setItems((item) => items.filter((item) => item.id !== id));
  }
  function handleUpdate(id: number) {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }
  function handleClick() {
    const confirm = window.confirm("Are sure you want to delete all ");
    if (confirm) setItems([]);
  }
  return (
    <>
      <div className="app">
        <Loggo />
        <Form onAdd={handleAdd} />
        <PackingList
          itemm={items}
          onDelete={handleDelete}
          onToggle={handleUpdate}
          onClick={handleClick}
        />
        <Stats items={items} />
      </div>
    </>
  );
}
