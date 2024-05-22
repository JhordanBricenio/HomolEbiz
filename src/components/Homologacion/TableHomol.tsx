import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

function createData(ruc: number, name: string, homol: string) {
  return { ruc, name, homol };
}

const rows = [
  createData(1828383121, "Variable S1", "hhh"),
  createData(1828383121, "Variable S2", "h"),
  createData(1828383121, "Variable S3", "hh"),
  createData(1828383121, "Variable S4", "hh"),
  createData(1828383121, "Variable S5", "hh"),
  createData(1828383121, "Variable S6", "hh"),
  createData(1828383121, "Variable S7", "hh"),
  createData(1828383121, "Variable S8", "hh"),
];
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function TableHomol() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="caption table">
        <TableHead style={{ background: "#1B3E85" }}>
          <TableRow style={{ height: "20px", fontSize: "8px" }}>
            <TableCell style={{ color: "#ffffff" }}>Activar</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Predefinidas</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Vencimiento</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Descripción</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Área Responsable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.ruc}>
              <TableCell component="th" scope="row">
                <Checkbox {...label} defaultChecked />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <a className="text-blue-400 underline" href="">
                  1 año
                </a>
              </TableCell>
              <TableCell>
                {index %2 === 0 ? (
                  <div>Información Fiscal del Contribuyente</div>
                ) : (
                  <div>Información de Representantes Legales</div>
                )}
              </TableCell>
              <TableCell>
                <div className="flex flex-row gap-3">
                  <div>
                    <input type="radio" />
                    <label htmlFor="">Compras</label>
                  </div>

                  <div>
                    <input type="radio" />
                    <label htmlFor="">Finanzas</label>
                  </div>

                  <div>
                    <input type="radio" />
                    <label htmlFor="">Auditoría</label>
                  </div>

                  <div>
                    <input type="radio" />
                    <label htmlFor="">Compliance</label>
                  </div>

                  <div>
                    <input type="radio" />
                    <label htmlFor="">Manager</label>
                  </div>
                </div>

                {/* <Stack spacing={2}>
                  <Autocomplete
                    multiple
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                      />
                    )}
                  />
                </Stack> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
