import { Route, Routes } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Destinations from './pages/Destinations';
import SingleDest from './pages/SingleDest';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/destinations/:slug" element={<SingleDest />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
