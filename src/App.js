import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import NoPage from "./pages/NoPage";
import AboutPage from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
