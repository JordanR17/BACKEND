import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store';
import { Provider, provider } from 'react-redux';
import Error404 from 'containers/errors/Error404';
import Home from 'containers/pages/Home';
import Servicios from 'containers/pages/Servicios';
import Bodegas from 'containers/pages/Bodegas';
import Nosotros from 'containers/pages/Nosotros';
import Contacto from 'containers/pages/Contacto';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display*/}
          <Route path='*' element={<Error404 />} />
          {/* Home Display */}
          <Route path='/' element={<Home />} />
          {/* Home Display */}
          <Route path='/bodegas' element={<Bodegas />} />
          {/* Home Display */}
          <Route path='/servicios' element={<Servicios />} />
          {/* Home Display */}
          <Route path='/nosotros' element={<Nosotros />} />
          {/* Home Display */}
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;
 