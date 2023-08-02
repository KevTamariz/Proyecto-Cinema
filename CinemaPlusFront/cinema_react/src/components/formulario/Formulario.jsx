// App.js
// ... (otros imports y código)

import Formulario from './components/Formulario'; // Importa el componente Formulario

const App = () => {
  // ... (otro código)

  return (
    <div className="app-container">
      <Router>
        <Navbar setSelectedSucursal={setSelectedSucursal} />
        <Routes>
          {/* ... (otras rutas) */}
          {/* Ruta para el componente Formulario */}
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
