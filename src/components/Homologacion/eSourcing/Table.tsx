import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./esourcing.css";

function createData(ruc: number, name: string, homol: string) {
  return { ruc, name, homol };
}

const rows = [
  createData(1828383121, "Nombre 1", "hhh"),
  createData(1828383121, "Nombre 2", "h"),
  createData(1828383121, "Nombre 3", "hh"),
];

export default function TableBusqueda() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="caption table">
        <caption>Últimos procesos</caption>
        <TableHead style={{ background: "#1B3E85" }}>
          <TableRow style={{ height: "20px", fontSize: "8px" }}>
            <TableCell style={{ color: "#ffffff", width: "20px" }}></TableCell>
            <TableCell style={{ color: "#ffffff" }}>RAZON SOCIAL </TableCell>
            <TableCell style={{ color: "#ffffff" }}>RUC</TableCell>
            <TableCell style={{ color: "#ffffff" }}>HOMOL</TableCell>
            <TableCell style={{ color: "#ffffff" }}>NOTIFICAR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={row.ruc}>
              <TableCell component="th" scope="row">
                {/* Añadir un checkbox */}
                <input type="checkbox" />
              </TableCell>
              <TableCell>
                <a className="text-blue-500 underline" href="">
                  Proveedor
                </a>
              </TableCell>
              <TableCell>{row.ruc}</TableCell>
              <TableCell>
                { index % 2 === 0 ? ( <div className="circle">
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                </div>):(
                  <div>
                    
                  </div>
                  
                
                )}
              </TableCell>
              <TableCell>
                <a className="text-blue-500 underline" href="">
                  Notificar
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
