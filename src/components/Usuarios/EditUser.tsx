import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import Nav from "../Nav/Nav";
import user from "../../assets/images/user.svg";

function EditUser() {
  return (
    <div className="flex flex-row">
      <div>
        <Nav/>
      </div>
      <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[20px] px-[18px] pb-9 box-border tracking-[normal] leading-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[59px] mq750:pr-[59px] mq750:box-border">
        <div className="flex flex-row items-start justify-start py-0 px-[19px]">
          <div className="rounded-8xs bg-cornflowerblue flex flex-row items-start justify-start pt-6 pb-[23px] pr-[23px] pl-6 z-[1]">
            <div className="h-[87px] w-[87px] relative rounded-8xs bg-cornflowerblue hidden" />
            <img
              className="h-10 w-10 relative z-[1] "
              loading="lazy"
              alt=""
              src={user}
            />
          </div>
        </div>
        <main className="self-stretch rounded-3xs bg-white-color flex flex-col items-start justify-start pt-5 px-[19px] pb-[137px] box-border gap-[37px] max-w-full mt-[-43px] mq450:pb-[58px] mq450:box-border mq750:gap-[18px] mq1050:pb-[89px] mq1050:box-border">
        <div className="w-[1200px] h-[791px] relative rounded-3xs bg-white-color hidden max-w-full" />
          <section className="self-stretch flex flex-col items-start justify-start gap-[41px] max-w-full text-left text-base text-gray-500 font-roboto mq750:gap-[20px]">
            <div className="w-[310px] flex flex-row items-start justify-center py-0 px-5 box-border">
              <div className="relative inline-block min-w-[100px] z-[1]">
                Editar Usuario
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full z-[1]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch h-14 min-w-[250px]"
                  color="primary"
                  label="Nombre de usuario"
                  required={true}
                  variant="standard"
                  sx={{
                    "& .MuiInputBase-root": { height: "56px" },
                    width: "1030px",
                  }}
                />
              </div>
              <div className="w-[525px] flex flex-row flex-wrap items-start justify-start gap-[15px] max-w-full">
                <Button
                  className="h-[30px] flex-1 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] min-w-[110px] max-w-[120px]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#ff9800",
                    borderRadius: "30px",
                    "&:hover": { background: "#ff9800" },
                    height: 30,
                  }}
                >
                  ELMANUAL
                </Button>
                <Button
                  className="h-[30px] flex-1 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] min-w-[110px] max-w-[120px]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#ff9800",
                    borderRadius: "30px",
                    "&:hover": { background: "#ff9800" },
                    height: 30,
                  }}
                >
                  ELMANUAL
                </Button>
                <Button
                  className="h-[30px] flex-1 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] min-w-[110px] max-w-[120px]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#ff9800",
                    borderRadius: "30px",
                    "&:hover": { background: "#ff9800" },
                    height: 30,
                  }}
                >
                  ELMANUAL
                </Button>
                <Button
                  className="h-[30px] flex-1 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] min-w-[110px] max-w-[120px]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#ff9800",
                    borderRadius: "30px",
                    "&:hover": { background: "#ff9800" },
                    height: 30,
                  }}
                >
                  ELMANUAL
                </Button>
              </div>
            </div>
          </section>
          <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[37px] max-w-full text-left text-base text-gray-500 font-roboto mq750:gap-[18px]">
            <div className="relative inline-block min-w-[121px] z-[1]">
              Datos de usuario
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[36px] max-w-full z-[1] mq750:gap-[18px]">
              <TextField
                className="[border:none] bg-[transparent] h-14 w-[279px]"
                color="primary"
                label="Apellido paterno"
                size="medium"
                required={true}
                variant="standard"
                type="text"
                sx={{
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                  "& .MuiInputBase-root": { height: "56px" },
                  width: "279px",
                }}
              />
              <div className="h-14 w-[293px] flex flex-row items-start justify-start">
                <TextField
                  className="[border:none] bg-[transparent] self-stretch flex-1 min-w-[176px]"
                  color="primary"
                  label="Apellido materno"
                  variant="standard"
                  sx={{
                    "& .MuiInputBase-root": { height: "56px" },
                    width: "293px",
                  }}
                />
              </div>
              <TextField
                className="[border:none] bg-[transparent] h-14 flex-1 min-w-[300px] max-w-full"
                color="primary"
                label="Nombre (s)"
                size="medium"
                placeholder="Ebiz Latin"
                required={true}
                variant="standard"
                type="text"
                sx={{
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                  "& .MuiInputBase-root": { height: "56px" },
                }}
              />
            </div>
          </section>
          <section className="self-stretch flex flex-col items-start justify-start gap-[53px] max-w-full z-[1] text-left text-base text-gray font-roboto mq750:gap-[26px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[27px] max-w-full">
              <TextField
                className="[border:none] bg-[transparent] h-14 flex-1 min-w-[211px] max-w-full"
                color="primary"
                label="Correo electrónico"
                size="medium"
                required={true}
                variant="standard"
                type="email"
                sx={{
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                  "& .MuiInputBase-root": { height: "56px" },
                }}
              />
              <TextField
                className="[border:none] bg-[transparent] h-14 w-[180px]"
                color="primary"
                label="Teléfono"
                size="medium"
                variant="standard"
                type="number"
                sx={{
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                  "& .MuiInputBase-root": { height: "56px" },
                  width: "180px",
                }}
              />
              <TextField
                className="[border:none] bg-[transparent] h-14 w-[180px]"
                color="primary"
                label="Cargo"
                size="medium"
                variant="standard"
                type="text"
                sx={{
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                  "& .MuiInputBase-root": { height: "56px" },
                  width: "180px",
                }}
              />
              <TextField
                className="[border:none] bg-[transparent] h-14 w-[180px]"
                color="primary"
                label="N° Documento"
                size="medium"
                placeholder="992832621"
                variant="standard"
                type="number"
                sx={{
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                  "& .MuiInputBase-root": { height: "56px" },
                  width: "180px",
                }}
              />
              <FormControl
                className="h-14 w-[180px]"
                variant="filled"
                sx={{
                  borderColor: "rgba(0, 0, 0, 0.38)",
                  borderRadius: "4px",
                  width: "180px",
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
                <InputLabel color="primary">Tipo de documento</InputLabel>
                <Select
                  color="primary"
                  label="Tipo de documento"
                  disableUnderline
                  displayEmpty
                >
                  <MenuItem value="DNI">DNI</MenuItem>
                  <MenuItem value="EXTRANJERIA">EXTRANJERIA</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[37px] max-w-full mq750:gap-[18px]">
              <div className="relative inline-block max-w-full text-gray-500">
                Dirección (en caso de ubicarse en una sucursal)
              </div>
              <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[61px] max-w-full mq750:gap-[15px] mq1125:gap-[30px]">
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
                  <TextField
                    className="[border:none] bg-[transparent] h-14 w-[204px]"
                    color="primary"
                    label="Departamento"
                    size="medium"
                    variant="standard"
                    type="text"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                      width: "204px",
                    }}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] h-14 w-[204px]"
                    color="primary"
                    label="Provincia"
                    size="medium"
                    variant="standard"
                    type="text"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                      width: "204px",
                    }}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] h-14 w-[204px]"
                    color="primary"
                    label="Distrito"
                    size="medium"
                    variant="standard"
                    type="text"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                      width: "204px",
                    }}
                  />

                  <TextField
                    className="[border:none] bg-[transparent] h-14 flex-1 min-w-[288px] max-w-full"
                    color="primary"
                    label="Dirección"
                    size="medium"
                    required={true}
                    variant="standard"
                    type="text"
                    sx={{
                      "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                      "& .MuiInputBase-root": { height: "56px" },
                    }}
                  />
                </div>
                <div className="w-[313px] flex flex-row items-start justify-start gap-[27px]">
                  <Button
                    className="h-12 flex-[0.9155] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)]"
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
                    className="h-12 flex-1 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)]"
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
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default EditUser;
