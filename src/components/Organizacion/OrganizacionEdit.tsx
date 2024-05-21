import { Switch, FormControlLabel, Button } from "@mui/material";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Nav from "../Nav/Nav";

function EditOrg() {
  return (
    <div className="flex flex-row">
      <div>
        <Nav/>
      </div>
      <div className="w-full h-[1024px] relative bg-whitesmoke overflow-hidden tracking-[normal] leading-[normal] mq193:h-auto mq193:min-h-[1024]">
        <div className="absolute h-[8.5%] w-[6.04%] top-[8.89%] right-[83.89%] bottom-[82.62%] left-[10.07%] rounded-[5px] bg-cornflowerblue z-[1]" />
        <main className="absolute top-[134px] left-[118px] rounded-3xs bg-white-color w-[1200px] flex flex-col items-start justify-start pt-[18px] px-[27px] pb-[35px] box-border gap-[80.7px] max-w-full text-left text-base text-gray font-roboto">
          <div className="w-[1200px] h-[791px] relative rounded-3xs bg-white-color hidden max-w-full" />
          <div className="w-[337px] flex flex-row items-start justify-center pt-0 px-0 pb-[7.3px] box-border max-w-full">
            <div className="relative z-[1]">Editar Organización</div>
          </div>
          <div className="w-[443px] flex flex-row items-start justify-between gap-[20px] max-w-full z-[1] mq193:flex-wrap mq193:justify-center">
            <div className="rounded-[63.46px] bg-cornflowerblue-100 flex flex-row items-start justify-start pt-[1.3px] px-0.5 pb-[1.2px]">
              <FormControlLabel
                className="h-[17.8px] w-[29px]"
                label="Comprador"
                control={<Switch color="primary" />}
              />
            </div>
            <div className="rounded-[63.46px] bg-cornflowerblue-100 flex flex-row items-start justify-start pt-[1.3px] px-0.5 pb-[1.2px]">
              <FormControlLabel
                className="h-[17.8px] w-[29px]"
                label="Proveedor"
                control={<Switch color="primary" />}
              />
            </div>
            <div className="rounded-[63.46px] bg-cornflowerblue-100 flex flex-row items-start justify-start pt-[1.3px] px-0.5 pb-[1.2px]">
              <FormControlLabel
                className="h-[17.8px] w-[29px]"
                label="Financiera"
                control={<Switch color="primary" />}
              />
            </div>
          </div>

          <section className="w-[1118px] flex flex-row items-start justify-start pt-0 px-0 pb-[21.3px] box-border max-w-full text-left text-base text-gray font-roboto">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full z-[1]">
              <div className="relative">Datos de la organización</div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[54px] max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full">
                  <TextField
                    className="[border:none] bg-[transparent] h-14 w-[175px]"
                    color="primary"
                    label="RUC"
                    size="medium"
                    placeholder="9865511411"
                    required={true}
                    variant="standard"
                    type="text"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                      width: "175px",
                    }}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] h-14 flex-1 min-w-[275px] max-w-full"
                    color="primary"
                    label="Razón Social"
                    size="medium"
                    placeholder="Manual"
                    variant="standard"
                    type="text"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                    }}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] h-14 flex-1 min-w-[275px] max-w-full"
                    color="primary"
                    label="Página web"
                    size="medium"
                    variant="standard"
                    type="text"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                    }}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[43px] max-w-full mq1116:flex-wrap">
                  <TextField
                    className="[border:none] bg-[transparent] h-14 w-[646px] max-w-full"
                    color="primary"
                    label="Dirección"
                    size="medium"
                    placeholder="Av.Manual.jr"
                    required={true}
                    variant="standard"
                    type="text"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                      width: "646px",
                    }}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] h-14 w-[175px]"
                    color="primary"
                    label="Código Postal"
                    size="medium"
                    variant="standard"
                    type="text"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                      width: "175px",
                    }}
                  />
                  <div className="w-[211px] flex flex-col items-center justify-start">
                    <FormControl
                      className="self-stretch h-14 min-w-[127px]"
                      variant="standard"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "211px",
                        height: "56px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "56px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "56px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "56px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "56px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          textAlign: "left",
                          p: "0 !important",
                        },
                      }}
                    >
                      <InputLabel color="primary">Seleccione país</InputLabel>
                      <Select
                        color="primary"
                        label="Seleccione país"
                        disableUnderline
                        displayEmpty
                      >
                        <MenuItem value="Perú">Perú</MenuItem>
                        <MenuItem value="Bolivia">Bolivia</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[35px]">
                  <FormControl
                    className="h-14 flex-1 min-w-[233px] max-w-[253px]"
                    variant="standard"
                    sx={{
                      borderColor: "rgba(0, 0, 0, 0.38)",
                      borderRadius: "4px",
                      width: "253px",
                      height: "56px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "56px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "56px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "56px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "56px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="primary">Ciudad</InputLabel>
                    <Select
                      color="primary"
                      label="Ciudad"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Lima">Lima</MenuItem>
                      <MenuItem value="Trujillo">Trujillo</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <FormControl
                    className="h-14 flex-1 min-w-[233px] max-w-[253px]"
                    variant="standard"
                    sx={{
                      borderColor: "rgba(0, 0, 0, 0.38)",
                      borderRadius: "4px",
                      width: "253px",
                      height: "56px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "56px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "56px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "56px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "56px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="primary">Provincia</InputLabel>
                    <Select
                      color="primary"
                      label="Provincia"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="Lima">Lima</MenuItem>
                      <MenuItem value="Trujillo">Trujillo</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <TextField
                    className="[border:none] bg-[transparent] h-14 flex-1 min-w-[233px] max-w-[253px]"
                    color="primary"
                    label="Teléfono fijo"
                    size="medium"
                    variant="standard"
                    type="number"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                    }}
                  />
                  <FormControl
                    className="h-14 flex-1 min-w-[233px] max-w-[253px]"
                    variant="filled"
                    sx={{
                      borderColor: "rgba(0, 0, 0, 0.38)",
                      borderRadius: "4px",
                      width: "253px",
                      height: "56px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "56px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "56px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "56px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "56px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        textAlign: "left",
                        p: "0 !important",
                      },
                    }}
                  >
                    <InputLabel color="primary">Crear calendarios</InputLabel>
                    <Select
                      color="primary"
                      label="Crear calendarios"
                      disableUnderline
                      displayEmpty
                    >
                      <MenuItem value="SI">SI</MenuItem>
                      <MenuItem value="NO">NO</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
          </section>

          <section className="w-[730px] flex flex-col items-start justify-start gap-[30px] max-w-full">
            <Button
              className="w-56 h-[35px] z-[1]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#2299e4",
                borderRadius: "45px",
                "&:hover": { background: "#2299e4" },
                width: 224,
                height: 35,
              }}
            >
              SELECCIONAR LOGO
            </Button>
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="w-[313px] flex flex-row items-start justify-start gap-[27px]">
                <Button
                  className="h-12 flex-[0.9155] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#2299e4",
                    borderRadius: "5px",
                    "&:hover": { background: "#2299e4" },
                    height: 48,
                  }}
                >
                  GUARDAR
                </Button>
                <Button
                  className="h-12 flex-1 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#2299e4",
                    borderRadius: "5px",
                    "&:hover": { background: "#2299e4" },
                    height: 48,
                  }}
                >
                  REGRESAR
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default EditOrg;
