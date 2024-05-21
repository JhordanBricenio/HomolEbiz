import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import "../eSourcing/esourcing.css";

import AttachFileIcon from "@mui/icons-material/AttachFile";

function createData(ruc: string, name: string, homol: string) {
  return { ruc, name, homol };
}

const rows = [
  createData("Variable 1", "Nombre 1", "hhh"),
  createData("Variable 2", "Nombre 2", "h"),
];

export default function TableCompra() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead style={{ background: "#1B3E85" }}>
          <TableRow style={{ height: "20px", fontSize: "8px" }}>
            <TableCell style={{ color: "#ffffff" }}>Variables </TableCell>
            <TableCell style={{ color: "#ffffff" }}>Homologación</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Descripción</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Variable</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ruc}>
              <TableCell>{row.ruc}</TableCell>
              <TableCell>
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
                </div>
              </TableCell>
              <TableCell>Lorem ipsum dolor.</TableCell>
              <TableCell>
                <AttachFileIcon />
                <a className="text-blue-400 underline" href="">
                  Revisa archivo Adjunto
                </a>
              </TableCell>
              <TableCell>
                <div className="flex flex-row gap-2">
                  <Button
                    className="shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "10px",
                      background: "#2299e4",
                      borderRadius: "5px",
                      "&:hover": { background: "#2299e4" },
                      width: 60,
                      height: 30,
                    }}
                  >
                    CALIFICAR
                  </Button>

                  <Button
                    className="!m-[0] absolute top-[0px] left-[2px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "10px",
                      background: "#2299e4",
                      borderRadius: "5px",
                      "&:hover": { background: "#2299e4" },
                      width: 60,
                      height: 30,
                    }}
                  >
                    REVOCAR
                  </Button>
                  <Button
                    className="!m-[0] absolute top-[0px] left-[2px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "10px",
                      background: "#2299e4",
                      borderRadius: "5px",
                      "&:hover": { background: "#2299e4" },
                      width: 60,
                      height: 30,
                    }}
                  >
                    APROBAR
                  </Button>
                  <Button
                    className="!m-[0] absolute top-[0px] left-[2px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "10px",
                      background: "#2299e4",
                      borderRadius: "5px",
                      "&:hover": { background: "#2299e4" },
                      width: 60,
                      height: 30,
                    }}
                  >
                    RECHAZAR
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
