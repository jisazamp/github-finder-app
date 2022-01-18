import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main>Hola mundo</main>
    </div>
  );
};

export default App;
