import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CancelIcon from "@mui/icons-material/Cancel";
import { Checkbox } from "@mui/material";
import "./user.css"

function createData(ruc: string, name: string, homol: string) {
  return { ruc, name, homol };
}

const rows = [
  createData("Proveedor 1", "Nombre 1", "hhh"),
  createData("Proveedor 2", "Nombre 2", "h"),
  createData("Proveedor 3", "Nombre 3", "hh"),
  createData("Proveedor 4", "Nombre 3", "hh"),
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function TableUser() {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead className="font-bold">
          <TableRow>
            <TableCell style={{ color: "#000000", fontStyle:'italic' }}>
              <Checkbox {...label} defaultChecked />
            </TableCell>
            <TableCell style={{ color: "#000000", fontWeight:'bold'  }}>Usuario</TableCell>
            <TableCell style={{ color: "#000000",fontWeight:'bold'  }}>
              Apellidos y Nombres
            </TableCell>
            <TableCell style={{ color: "#000000",fontWeight:'bold'  }}>
              Correo Electrónico
            </TableCell>
            <TableCell style={{ color: "#000000",fontWeight:'bold'  }}>Área</TableCell>
            <TableCell style={{ color: "#000000",fontWeight:'bold'  }}>Estado</TableCell>
            <TableCell style={{ color: "#000000",fontWeight:'bold'  }}>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.ruc}>
              <TableCell className="items-center" component="th" scope="row">
                <Checkbox {...label} defaultChecked />
              </TableCell>
              <TableCell>123456978</TableCell>
              <TableCell>Administrador</TableCell>
              <TableCell>holacorreo@gmail.com</TableCell>
              <TableCell>
                {index % 2 === 0 ? <div>Finanzas</div> : <div>Compliance</div>}
              </TableCell>
              <TableCell>Activo</TableCell>
              <TableCell>
                <div className="flex flex-row gap-3">
                <div className="circular-container">
                  <RemoveRedEyeIcon style={{color:'#ffffff', width:'17px', height:'17px'}} />
                </div>
                <div>
                <CancelIcon style={{ color: "green" }} />
                </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
