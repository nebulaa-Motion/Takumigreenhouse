import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(65%_140%_at_-10%_50%,rgba(9,190,121,.45)_0%,rgba(9,190,121,.22)_50%,transparent_100%),radial-gradient(65%_140%_at_110%_50%,rgba(254,126,35,.45)_0%,rgba(254,126,35,.22)_50%,transparent_100%),linear-gradient(180deg,#FFFFFF_0%,#F8FCFA_100%)]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
