import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ClientGalleries from './pages/ClientGalleries';
import Packages from './pages/Packages';
import RealEstate from './pages/RealEstate';
import Videography from './pages/Videography';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="clientGalleries" element={<ClientGalleries />} />
          <Route path="packages" element={<Packages />} />
          <Route path="realEstate" element={<RealEstate />} />
          <Route path="videography" element={<Videography />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};
