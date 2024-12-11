import { useState } from 'react';
import './App.css'; // Include custom styles

function App() {
  const buttonStyle = {
    width: '100px',
    height: '50px',
  };

  const [bgColor, setBgColor] = useState('bg-danger');

  const backgroundColor = (colorClass) => {
    setBgColor(colorClass);
  };

  return (
    <>
      <div className={`min-vh-100 d-flex flex-column justify-content-center align-items-center text-white ${bgColor}`}>
        <h1>Hello, World!</h1>
        <div className="d-flex gap-3 ">
          <button
            className="btn btn-light border text-warning "
            style={buttonStyle}
            onClick={() => backgroundColor('bg-warning')}
          >
            Yellow
          </button>
          <button
            className="btn btn-light border text-danger "
            style={buttonStyle}
            onClick={() => backgroundColor('bg-danger')}
          >
            Red
          </button>
          <button
            className="btn btn-light border text-success"
            style={buttonStyle}
            onClick={() => backgroundColor('bg-success')}
          >
            Green
          </button>
          <button
            className="btn btn-light border text-dark"
            style={buttonStyle}
            onClick={() => backgroundColor('bg-dark')}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
