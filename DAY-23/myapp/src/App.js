import axios from 'axios';
import './App.css';
import mquery from './myquery';


function App() {
  const { response } = mquery(
    axios.get("https://foodish-api.herokuapp.com/api")
  );
  return (
    <div>
      <img src={response.image} />
    </div>
  );
}

export default App;
