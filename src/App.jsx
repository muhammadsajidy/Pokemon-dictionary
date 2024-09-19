import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import ErrorPage from "./Components/ErrorPage";

export default function App() {
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/dictionary" element={<Dictionary />}/>
            <Route path="*" element={<ErrorPage />}/>
          </Routes>
        </BrowserRouter>
      </>
    )
}
