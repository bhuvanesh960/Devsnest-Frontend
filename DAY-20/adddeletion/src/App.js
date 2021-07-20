import './App.css';
import CalorieCard from './CalorieCard';
import { useState } from 'react';
const menuItems = [
  ['Pizza', 56],
  ['Berger', 69],
  ['Coke', 500],
  ['Browne', 180],
  ['Fried Rice', 90],
  ['Lassania', 200],
  ['Pani Puri', 10]
];

export default function App() {
  const [menu, setMenu] = useState(menuItems);
  return (
    <div className="App">

      <CalorieCard menu={menu} setCards={setMenu} />
    </div>
  );
}