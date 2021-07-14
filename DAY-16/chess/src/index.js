import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
const ChessBoard = () => {
  let boxes = []
  for (let i = 0; i < 8; i++) {
    boxes.push(<div className="square" />);
  }
  return (
    <div className="App">
      <div className="chessBoard">
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
        <div className="row">{boxes}</div>
      </div>
    </div>
  )
}
function App() {
  return (
    <>
      <ChessBoard />
    </>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



