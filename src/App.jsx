import Header from "./components/Header";
import { useEffect } from "react/cjs/react.development";
import "./App.css"
import "./styles/index.css"

import { Routes, Route, Link, useParams } from "react-router-dom"
import Products from "./pages/products";
import Categories from "./pages/categories";
import Basket from "./pages/basket";
import NotFound from "./pages/not-found";



function App() {
  const params = useParams()
  return (
    <>
      <Header />
      <main>

        <Routes>
          <Route path='/home' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:id' element={params.id} />
          <Route path='/basket' element={<Basket />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
