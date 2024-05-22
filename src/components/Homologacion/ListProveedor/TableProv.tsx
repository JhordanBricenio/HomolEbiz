import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Radio, Rating } from "@mui/material";
import "./../eSourcing/esourcing.css";
import "./listprov.css"
import { Link } from "react-router-dom";

function createData(ruc: string, name: string, homol: string) {
  return { ruc, name, homol };
}

const rows = [
  createData("Proveedor 1", "Nombre 1", "hhh"),
  createData("Proveedor 2", "Nombre 2", "h"),
  createData("Proveedor 3", "Nombre 3", "hh"),
  createData("Proveedor 4", "Nombre 3", "hh"),
  createData("Proveedor 5", "Nombre 3", "hh"),
  createData("Proveedor 6", "Nombre 3", "hh"),
  createData("Proveedor 7", "Nombre 3", "hh"),
];

export default function TableProv() {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead style={{ background: "#1B3E85" }}>
          <TableRow>
            <TableCell style={{ color: "#ffffff" }}>
              Otros compradores
            </TableCell>
            <TableCell style={{ color: "#ffffff" }}>
              Ponderado interno
            </TableCell>
            <TableCell style={{ color: "#ffffff" }}>Razón Social</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Homologación</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Vencimiento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.ruc}>
              <TableCell className="items-center" component="th" scope="row">
                {index % 2 === 0 ? (
                  <Radio color="success" />
                ) : (
                  <Radio color="warning" />
                )}
              </TableCell>
              <TableCell>
                <Rating name="read-only" value={2.5} precision={0.5} />
              </TableCell>
              <TableCell>
                <Link
                  className="text-blue-400 underline"
                  to="/homologacion/aprobacion"
                >
                  {row.name}
                </Link>
              </TableCell>
              <TableCell>
                { index % 2 === 0 ? ( 
                <div className="circle">
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
                  <div className="circle1">
                  <svg
                    className="checkmark1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark__circle1"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark__check1"
                      fill="none"
                      d="M16 16 36 36 M36 16 16 36"
                    />
                  </svg>
                </div>
                )}
              </TableCell>
              <TableCell>
                <a href=""> 04/19/2020</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
