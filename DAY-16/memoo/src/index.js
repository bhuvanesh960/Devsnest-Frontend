import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
function App() {
  return (
    <div id='myid'>
      <img src='https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/2019-03/Screen%20Shot%202019-03-14%20at%2010.53.38%20AM.png'></img>
      <h1>this is heading1</h1>
      <br></br>
      <p>this is a sample react card</p>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



