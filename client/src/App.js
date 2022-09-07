import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOutForm from "./Vistas/Paciente/CheckOutForm";
import Home from "./Vistas/Compartido/Componentes/Home";
import DoctorsRoster from "./Vistas/Compartido/Componentes/Main/Listado/Roster";
import DetalleDoctor from "./Vistas/Compartido/Componentes/Main/DetalleDoctor";
import Registro from "./Vistas/Doctor/Componentes/Form";
import Stripe from "./Vistas/Paciente/StripeCheckOut"


function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/dummy/doctors" element={<DoctorsRoster />} />
        <Route exact path="dummy/doctors/:idDoctor/stripe" element={<Stripe />}/>
        <Route
          exact
          path="/dummy/doctors/:idDoctor"
          element={<DetalleDoctor />}
        />
        <Route exact path="/Form" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
