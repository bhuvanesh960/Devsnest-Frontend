import "./App.css";
import { useState } from "react";
import AddingItemForm from "./addingitem";
import Editing from "./modify";

export default function App() {
  const [data, setData] = useState([]);

  const updateItem = (index, newItem) => {
    setData(
      data.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const addItem = item => {
    setData([...data, item]);
  };
  const removeItem = index => {
    setData(data.filter((item, i) => i !== index));
  };
  return (
    <div className="app">
      <div className='container'>
        <AddingItemForm addItem={addItem} />
        {data.length === 0 ? (
          <h3>Add few </h3>
        ) : (
          data.map((item, index) => (
            <Editing
              item={item}
              key={index}
              index={index}
              updateItem={updateItem}
              removeItem={removeItem}
            />
          )))}
      </div>
    </div>
  );
}