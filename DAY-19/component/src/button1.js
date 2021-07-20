import { useState } from "react";
const Butto = () => {
  let [num, counter] = useState(0);
  return (
    <div>
      <button onClick={() => {
        counter(num + 1)
      }}>
        {num}
      </button>
    </div>
  );
}
export default Butto;