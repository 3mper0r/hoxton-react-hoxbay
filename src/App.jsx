import Header from "./components/Header";
import "./App.css"
import "./styles/index.css"

import { Routes, Route, Link, useParams, Navigate } from "react-router-dom"
import Products from "./pages/products";
import Categories from "./pages/categories";
import Basket from "./pages/basket";
import NotFound from "./pages/not-found";
import Prodcut_detail from "./pages/product-detail";

function App() {
  const params = useParams()
  return (
    <>
      <Header />
      <main>

        <Routes>
          <Route index element={<Navigate replace to='/products' />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Prodcut_detail />} />
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
