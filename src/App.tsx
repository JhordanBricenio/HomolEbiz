import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LoginRegistro from "./components/Registro/Registro";
import PerfilN from "./components/PerfilN/PerfilNComponent";
import Procesos from "./components/Procesos/ProcesosComponent";
import ProcesosEdicion from "./components/ProcesosEdicion/ProcesosEdicionComponent";
import EditOrg from "./components/Organizacion/OrganizacionEdit";
import BuscarUser from "./components/Usuarios/BuscarUser";
import EditUser from "./components/Usuarios/EditUser";
import Configuration from "./components/Homologacion/Configuaration";
import ListProveedor from "./components/Homologacion/ListProveedor/ListProveedor";
import Esourcing from "./components/Homologacion/eSourcing/Esourcing";
import Aprobacion from "./components/Homologacion/Aprobacion/Compra";
import Process from "./components/Process/Process";

function App() {
  return (
    <div>
      {/*<LoginRegistro />*/}
      <Routes>
      <Route path="/" element={<Nav/>} />
        <Route path="/editOrg" element={<EditOrg />} />
        <Route path="/searchUser" element={<BuscarUser />} />
        <Route path="/editUser" element={<EditUser />} />
        <Route path="/homologacion/config" element={<Configuration />} />
        <Route path="/homologacion/listaprovee" element={<ListProveedor />} />
        <Route path="/homologacion/creacionrq" element={<Esourcing/>} />
        <Route path="/homologacion/procesos" element={<Process/>} />
        <Route path="/homologacion/aprobacion" element={<Aprobacion/>} />
      </Routes>
    </div>
  );
}

export default App;
