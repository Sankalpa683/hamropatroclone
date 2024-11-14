import './index.css';
import Navbar from './pages/navbar'
import Dashboard from './pages/Dashboard'
import Search from './pages/search';
import Bulletin from './pages/Bulletin'
import Calander from './pages/calander-layout';
import Footer from './pages/footer'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <main>
      <Navbar />
      <Dashboard />
      <Search />
      <Bulletin />
      <Calander />
      <Footer />
    </main>
  );
}

export default App;