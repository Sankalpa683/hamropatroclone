import './index.css';
import Navbar from './pages/navbar'
import Dashboard from './pages/Dashboard'
import Search from './pages/search';
import Footer from './pages/footer'


function App() {
  return (
    <main>
      <Navbar />
      <Dashboard />
      <Search />
      <Footer />
    </main>
  );
}

export default App;