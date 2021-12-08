import React from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    ReactDOM.render(
      <div>
        <Heading></Heading>
        <Note> </Note>
        <Footer></Footer>
      </div>,
      document.getElementById('root')
    )
  );
}

export default App;


