import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className='flex flex-col justify-between h-screen bg-gray-600'>
      <Navbar />
      <main className='container mx-auto'>Hola mundo</main>
      <Footer />
    </div>
  );
};

export default App;
