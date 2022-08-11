import React from 'react';
import ReactDOM from 'react-dom/client'

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

function App() {
    // let message = 'hello react';
    // if (Math.random() > 0.5) {
    //     message = 'bye recat'
    // }
    // const date = new Date();
    // const time = date.toLocaleTimeString();
    // return <h1>{new Date().toLocaleTimeString()}</h1>;
    // return <h1>{message},<br /> I'm new here!</h1>;
    return (
        <div>
            <h1>Enter Your Age:-</h1>
            <input placeholder="hi there" />
            {/* <input type="number" min={5} style={{ color: 'red' }} /> */}
        </div>
    );
}

root.render(<App />);