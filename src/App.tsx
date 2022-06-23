import Home from './pages/Home';
import Surah from './pages/Surah';
import Layout from './layouts/Default';
import NoMatch from './pages/NoMatch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="surah/:id" element={<Surah />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
