import { useState } from 'react'
import './App.css'
import MiApi from './componentes/MiApi'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './componentes/Buscador'
import { Button } from 'react-bootstrap'

function App() {
  const [findDateState, setFindDateState] = useState("");
  const [canReload, setCanReload] = useState(false);

  return (
    <>
      <Header />
      <div className="main">
        <h1 className='title-main'>
          Feriados Chile &nbsp;
          {canReload &&
            <Button
              size='sm'
              variant="primary"
              onClick={() => setCanReload(false)}>
              Recargar
            </Button>}
        </h1>
      </div>
      <Buscador searchDate={setFindDateState} />
      <MiApi
        findDateState={findDateState}
        setCanReload={setCanReload}
        canReload={canReload}
      />
      <Footer />
    </>
  )
}

export default App
