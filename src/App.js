
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { ContainerCards } from './components/secaoCards/ContainerCards';
import { Secao } from './components/secaoTeste/SecaoTeste';

function App() {
  return (
    <main className="App">
      <Header />
      <div className='titulo'>
        <h2>PERSONAGENS</h2>
      </div>
      <ContainerCards />
      <div className='titulo-2'>
        <h2>Sobre a Série</h2>
      </div>
      <Secao  />
      <Footer />
    </main>
  );
}

export default App;
