import "./App.css";
import Props from "./assets/components/Props";

function App() {
  return (
    <>
    <div className="main-box">
      <h1>Student Results</h1>
      <div className="container">
        <Props name="Akshat tyagi" course="Computer Science" marks="95" />
        <Props name="Aryan tyagi" course="Computer Science" marks="92" />
        <Props name="Aman tyagi" course="Computer Science" marks="98" />
      </div>
      <div className="footer-info">
          <h3>Akhat tyagis</h3>
          <h4>Roll Number: 2503201000144</h4>
        </div>
    </div>
   </>
  );
}

export default App;
