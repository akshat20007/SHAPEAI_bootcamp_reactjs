import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <Note />
      <Note />
      <Note />
      <Footer />
    </>
  );
}
export default App;