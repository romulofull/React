import logo from './logo.svg';
import './App.css';
import { Componente2 } from './Componentes/Componente 2';
import { Componente1 } from './Componentes/Componente 1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esta es mi pagina en React de Rómulo Programador</p>
        <Componente1 />
        <Componente2 />


      </header>
    </div>
  );
}

export default App;
