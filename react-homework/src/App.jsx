import './App.css'
import Header from './Header';
import About from './About';
import Contact from './Contact';

function App() {

  const container = {
    textAlign: "center",
    padding: "10px",
    border: "double 20px black"
  }

  return (
    <div style={container}>
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
