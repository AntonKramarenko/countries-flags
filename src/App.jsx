import Header from "./components/Header";
import Main from "./components/Main";
import {HomePage} from './pages/HomePage'
import {Details} from './pages/Details'
import {NotFound} from './pages/NotFound'
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage countries={countries} setCountries={setCountries} />}/>
          <Route path="/country/:name" element={<Details />} />
          <Route path="/notFound" element={<NotFound/>}/>
          <Route path="*" element={ <Navigate to='notFound'/>}/>
        </Routes>
      </Main>
    </>
  );
}

export default App;
