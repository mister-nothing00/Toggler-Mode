import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function togglerDarkMode() {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark", !darkMode); // Aggiunge la classe 'dark' al body
  }

  return (
    <>
      <Navbar darkMode={darkMode} togglerDarkMode={togglerDarkMode} />
      <Main darkMode={darkMode} />
    </>
  );
}

export default App;
