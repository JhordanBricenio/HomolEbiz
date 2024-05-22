import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, TextareaAutosize } from "@mui/material";
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
            <TableCell style={{ color: "#ffffff" }}>Variable</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Comentarios</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Opciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.ruc}>
              <TableCell>{row.ruc}</TableCell>
              <TableCell>
                {index % 2 === 0 ? (
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
                ) : (
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
                <div className="flex flex-row">
                  <div className="text-gray-500">Valor 1</div>
                  <div>
                    <AttachFileIcon style={{ height: "20px" }} />
                    <a className="text-blue-400 underline" href="">
                      Revisa archivo Adjunto
                    </a>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <TextareaAutosize
                  name="Soft"
                  placeholder="Type in here…"
                  style={{
                    width: "100%",
                    height: "30px",
                    padding: "5px",
                    borderRadius: "5px",
                    border: "1px solid #d1d1d1",
                    fontSize: "12px",
                    color: "#000000",
                  }}
                />
              </TableCell>
              <TableCell>
                <div className="flex flex-row gap-2">
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
