import logo from './logo.svg';
import './App.css';
import Topo from './components/Topo/topo'
import SobreMim from './components/SobreMim/sobreMim';
import SaibaMais from './components/SaibaMais/saibaMais';
import Rodape from './components/Rodape/rodape';
import Corpo from './components/Corpo/corpo';


function App() {
  return (
    <>
    <div>
       <Topo/>
       <SobreMim/>
       <SaibaMais/>
       <Corpo/>
       <Rodape/>
       

    
    </div>

    </>
  );
}

export default App;
