import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LoginRegistro from "./components/Registro/Registro";
import PerfilN from "./components/PerfilN/PerfilNComponent";
import Procesos from "./components/Procesos/ProcesosComponent";
import ProcesosEdicion from "./components/ProcesosEdicion/ProcesosEdicionComponent";
import EditOrg from "./components/Organizacion/OrganizacionEdit";
import BuscarUser from "./components/Usuarios/BuscarUser";

function App() {
  return (
    <div>
      <LoginRegistro />
      <Routes>
      <Route path="/" element={<Nav/>} />
        <Route path="/editOrg" element={<EditOrg />} />
        <Route path="/searchUsers" element={<BuscarUser />} />
        <Route path="/perfil" element={<PerfilN />} />
        <Route path="/procesos" element={<Procesos />} />
        <Route path="/procesos-edicion" element={<ProcesosEdicion />} />
      </Routes>
    </div>
  );
}

export default App;
