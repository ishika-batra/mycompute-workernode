import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import MasterNodes from './pages/MasterNodes';
import SingleMasterNode from './pages/SingleMasterNode';
import Profile from './components/Profile';
import CreditScore from './pages/CreditScore';
import Preferences from './pages/Preferences';

function App() {
  return (
    <BrowserRouter>
      <main className="page">
        <Profile />
        <div className="page-content">
          <header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/credit-score" element={<CreditScore />} />
              <Route path="/preferences" element={<Preferences />} />
              <Route path="/master-nodes" element={<MasterNodes />} />
              <Route path="/master-nodes/:id" element={<SingleMasterNode />} />
            </Routes>
          </header>
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
