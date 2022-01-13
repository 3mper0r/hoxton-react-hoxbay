import Header from "./components/Header";
import "./App.css"
import "./styles/index.css"
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <main>

        <Routes>
          <Route path='/home' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/basket' element={<Basket />} />

        </Routes>

      </main>
    </>
  );
}

export default App;
