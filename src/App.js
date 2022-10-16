import logo from "./logo.svg";
import "./App.css";
import Navbar from "./containers/Navbar";
import Title from "./containers/Title";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Title></Title>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
