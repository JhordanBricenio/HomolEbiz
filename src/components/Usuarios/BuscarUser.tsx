import {
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Nav from "../Nav/Nav";

function BuscarUser() {
  return (
    <div className="flex flex-row">
      <div>
        <Nav/>
      </div>
      <form className="m-0 w-[1440px] bg-whitesmoke max-w-full overflow-hidden flex flex-col items-start justify-start pt-[20px] px-[18px] pb-9 box-border tracking-[normal] leading-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[59px] mq800:pr-[59px] mq800:box-border">
        <div className="flex flex-row items-start justify-start py-0 px-[19px]">
          <div className="cursor-pointer [border:none] py-3.5 px-[15px] bg-cornflowerblue rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-deepskyblue">
            <div className="h-[47px] w-[147px] relative rounded-8xs bg-cornflowerblue hidden" />
            <div className="relative text-base font-typography-caption text-white-color text-left inline-block min-w-[117px] z-[2]">
              Buscar Usuarios
            </div>
          </div>
        </div>
        <main className="self-stretch rounded-3xs bg-white-color flex flex-col items-start justify-start pt-[89px] px-[19px] pb-[102px] box-border gap-[42px] max-w-full mt-[-24px] mq450:pb-[43px] mq450:box-border mq800:gap-[21px] mq1150:pb-[66px] mq1150:box-border">
          <div className="w-[1200px] h-[854px] relative rounded-3xs bg-white-color hidden max-w-full" />
          <section className="flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
            <div className="w-[1146px] flex flex-row flex-wrap items-end justify-start gap-[65px_55px] min-h-[177px] max-w-full z-[1] mq800:gap-[27px]">
              <div className="flex flex-row items-start justify-start gap-[44px] max-w-full mq800:gap-[22px] mq1350:flex-wrap">
                <TextField
                  className="[border:none] bg-[transparent] h-14 w-[175px]"
                  color="primary"
                  label="Usuario"
                  size="medium"
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
                  className="[border:none] bg-[transparent] h-14 w-[175px]"
                  color="primary"
                  label="N° Doc.Identidad"
                  size="medium"
                  required={true}
                  variant="standard"
                  type="number"
                  sx={{
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                    "& .MuiInputBase-root": { height: "56px" },
                    width: "175px",
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] h-14 w-[423px] max-w-full"
                  color="primary"
                  label="Correo Electrónico"
                  size="medium"
                  required={true}
                  variant="standard"
                  type="email"
                  sx={{
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                    "& .MuiInputBase-root": { height: "56px" },
                    width: "423px",
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] h-14 w-[241px]"
                  color="primary"
                  label="Teléfono"
                  size="medium"
                  required={true}
                  variant="standard"
                  type="number"
                  sx={{
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                    "& .MuiInputBase-root": { height: "56px" },
                    width: "241px",
                  }}
                />
              </div>
              <div className="w-[899px] flex flex-row items-end justify-start gap-[55px] max-w-full mq450:gap-[27px] mq1150:flex-wrap">
                <TextField
                  className="[border:none] bg-[transparent] h-14 flex-1 min-w-[197px]"
                  color="primary"
                  label="Nombre(s)"
                  size="medium"
                  required={true}
                  variant="standard"
                  type="text"
                  sx={{
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                    "& .MuiInputBase-root": { height: "56px" },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] h-14 flex-1 min-w-[197px]"
                  color="primary"
                  label="Apellido Paterno"
                  size="medium"
                  variant="standard"
                  type="text"
                  sx={{
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                    "& .MuiInputBase-root": { height: "56px" },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] h-14 flex-1 min-w-[197px]"
                  color="primary"
                  label="Apellido Materno"
                  size="medium"
                  variant="standard"
                  type="text"
                  sx={{
                    "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                    "& .MuiInputBase-root": { height: "56px" },
                  }}
                />
              </div>
            </div>
          </section>
          <section className="w-[1146px] flex flex-col items-end justify-start gap-[25px] max-w-full">
            <div className="w-[1129px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
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
            <div className="self-stretch flex flex-col items-end justify-start gap-[20px] max-w-full">
              <div className="self-stretch h-[49px] relative rounded-8xs bg-cornflowerblue-100 z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq800:flex-wrap">
                <FormControl
                  className="h-14 w-[147px]"
                  variant="filled"
                  sx={{
                    borderColor: "rgba(0, 0, 0, 0.38)",
                    borderRadius: "4px",
                    width: "147px",
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
                  <InputLabel color="primary">Mostrar</InputLabel>
                  <Select
                    color="primary"
                    label="Mostrar"
                    disableUnderline
                    displayEmpty
                  >
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                    <MenuItem value="20">20</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="w-[483px] flex flex-row items-start justify-start gap-[27px] max-w-full mq800:flex-wrap">
                  <Button
                    className="h-[35px] flex-[0.6941] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] min-w-[107px] mq450:flex-1"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#4caf50",
                      borderRadius: "5px",
                      "&:hover": { background: "#4caf50" },
                      height: 35,
                    }}
                  >
                    ACTIVAR
                  </Button>
                  <Button
                    className="h-[35px] flex-1 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] min-w-[107px]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#f44134",
                      borderRadius: "5px",
                      "&:hover": { background: "#f44134" },
                      height: 35,
                    }}
                  >
                    DESACTIVAR
                  </Button>
                  <Button
                    className="h-[35px] flex-[0.5294] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] min-w-[107px] mq450:flex-1"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#34a1e6",
                      borderRadius: "5px",
                      "&:hover": { background: "#34a1e6" },
                      height: 35,
                    }}
                  >
                    CREAR
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <div className="w-[1146px] overflow-x-auto flex flex-col items-start justify-start max-w-full z-[1]">
            <div className="w-[1146px] bg-darkslateblue box-border overflow-x-auto flex flex-row items-start justify-start border-b-[1px] border-solid border-divider">
              <Button
                className="h-9 flex-1"
                startIcon={
                  <img width="20px" height="20px" src="/-hidden.svg" />
                }
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "rgba(0, 0, 0, 0)",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "rgba(0, 0, 0, 0)" },
                  height: 36,
                }}
              >
                RAZÓN SOCIAL
              </Button>
              <div className="w-[458.4px] shrink-0 flex flex-row items-start justify-start max-w-[calc(100%_-_688px)]">
                <div className="flex-1 bg-gray flex flex-row items-start justify-start py-1.5 px-4 box-border min-w-[149px]">
                  <div className="hidden flex-row items-start justify-start py-0 px-1">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowdownwardfilled-2.svg"
                    />
                  </div>
                  <div className="relative text-sm tracking-[0.17px] leading-[24px] font-medium font-typography-caption text-white-color text-left inline-block min-w-[28px]">
                    RUC
                  </div>
                  <div className="hidden flex-row items-start justify-start py-0 px-1">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowdownwardfilled-2.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 bg-gray flex flex-row items-start justify-start py-1.5 px-4 box-border min-w-[149px] z-[1]">
                  <div className="hidden flex-row items-start justify-start py-0 px-1">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowdownwardfilled-2.svg"
                    />
                  </div>
                  <div className="relative text-sm tracking-[0.17px] leading-[24px] font-medium font-typography-caption text-white-color text-left inline-block min-w-[50px]">
                    HOMOL
                  </div>
                  <div className="hidden flex-row items-start justify-start py-0 px-1">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowdownwardfilled-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[458.4px] shrink-0 flex flex-row items-start justify-start max-w-[calc(100%_-_688px)]">
                <div className="flex-1 bg-gray flex flex-row items-start justify-start py-1.5 px-4 box-border min-w-[149px]">
                  <div className="hidden flex-row items-start justify-start py-0 px-1">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowdownwardfilled-2.svg"
                    />
                  </div>
                  <div className="relative text-sm tracking-[0.17px] leading-[24px] font-medium font-typography-caption text-white-color text-left inline-block min-w-[84px]">
                    REFERENCIA
                  </div>
                  <div className="hidden flex-row items-start justify-start py-0 px-1">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowdownwardfilled-2.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 bg-gray flex flex-row items-start justify-start py-1.5 px-4 box-border min-w-[149px] z-[1]">
                  <div className="hidden flex-row items-start justify-start py-0 px-1">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowdownwardfilled-2.svg"
                    />
                  </div>
                  <div className="relative text-sm tracking-[0.17px] leading-[24px] font-medium font-typography-caption text-white-color text-left inline-block min-w-[102px]">
                    VER CATÁLOGO
                  </div>
                  <div className="hidden flex-row items-start justify-start py-0 px-1">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrowdownwardfilled-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[600px] box-border hidden flex-row items-center justify-start max-w-full border-b-[1px] border-solid border-divider">
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 box-border min-w-[118px] max-w-[120px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[76px] flex flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Variable S 1
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 box-border min-w-[118px] max-w-[120px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-9 flex flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-cornflowerblue-100 text-left inline-block">
                      1 año
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 box-border min-w-[118px] max-w-[120px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[175px] flex flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Lorem ipsomn dolor ipsons
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 box-border min-w-[118px] max-w-[120px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[9px] flex flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      1
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[52px] w-[120px] overflow-hidden shrink-0 hidden flex-row items-center justify-start">
                <div className="h-[42px] w-[42px] rounded-81xl hidden flex-row items-center justify-start p-[9px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/-hidden.svg"
                  />
                </div>
              </div>
              <div className="h-[52px] flex-1 bg-gray flex flex-row items-center justify-start p-4 box-border min-w-[118px] max-w-[120px]">
                <div className="h-5 w-[88px] hidden flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="overflow-hidden flex flex-row items-center justify-start">
                      <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                        <input
                          className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                          type="checkbox"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch h-6 relative text-base tracking-[0.15px] leading-[150%] font-typography-caption text-text-primary text-left inline-block">
                        Label
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="overflow-hidden flex flex-row items-center justify-start">
                      <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                        <input
                          className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                          type="checkbox"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch h-6 relative text-base tracking-[0.15px] leading-[150%] font-typography-caption text-text-primary text-left inline-block">
                        Label
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[600px] h-[52px] box-border overflow-x-auto shrink-0 hidden flex-row items-center justify-start max-w-full border-b-[1px] border-solid border-divider">
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[76px] flex flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Variable S 2
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[72px] flex flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-cornflowerblue-100 text-left inline-block">
                      1 semestre
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[175px] flex flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Lorem ipsomn dolor ipsons
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="w-[9px] flex flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      4
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-center">
                    <div className="overflow-hidden flex flex-row items-center justify-start">
                      <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/-hidden-3.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch h-6 relative text-base tracking-[0.15px] leading-[150%] font-typography-caption text-text-primary text-left inline-block">
                        Área 1
                      </div>
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1146px] box-border flex flex-row items-center justify-start border-b-[1px] border-solid border-divider">
              <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="overflow-hidden flex flex-row items-center justify-start">
                      <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-start justify-start p-[9px] box-border">
                        <input
                          className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                          type="checkbox"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-base tracking-[0.15px] leading-[150%] font-typography-caption text-text-primary text-left inline-block min-w-[40px]">
                        Label
                      </div>
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <img
                    className="w-6 h-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/staroutlinefilled.svg"
                  />
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray flex flex-row items-center justify-start p-4 z-[1]">
                <div className="flex flex-col items-start justify-start py-0 pr-[22px] pl-0">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-cornflowerblue-200 text-left">
                      Lorem ipsomn dolor ipsons
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden-3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4 z-[1]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative text-base tracking-[0.15px] leading-[150%] font-typography-caption text-text-primary text-left inline-block min-w-[80px]">
                      04/102020
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1146px] box-border flex flex-row items-center justify-start border-b-[1px] border-solid border-divider">
              <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="overflow-hidden flex flex-row items-center justify-start">
                      <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-start justify-start p-[9px] box-border">
                        <input
                          className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                          type="checkbox"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-base tracking-[0.15px] leading-[150%] font-typography-caption text-text-primary text-left inline-block min-w-[40px]">
                        Label
                      </div>
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <img
                    className="w-6 h-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/starsharp.svg"
                  />
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray flex flex-row items-center justify-start p-4 z-[1]">
                <div className="flex flex-col items-start justify-start py-0 pr-[22px] pl-0">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-cornflowerblue-200 text-left">
                      Lorem ipsomn dolor ipsons
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden-3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4 z-[1]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative text-base tracking-[0.15px] leading-[150%] font-typography-caption text-text-primary text-left inline-block min-w-[80px]">
                      04/102020
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1146px] box-border flex flex-row items-center justify-start border-b-[1px] border-solid border-divider">
              <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="overflow-hidden flex flex-row items-center justify-start">
                      <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-start justify-start p-[9px] box-border">
                        <input
                          className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                          type="checkbox"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative text-base tracking-[0.15px] leading-[150%] font-typography-caption text-text-primary text-left inline-block min-w-[40px]">
                        Label
                      </div>
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <img
                    className="w-6 h-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/starsharp.svg"
                  />
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray flex flex-row items-center justify-start p-4 z-[1]">
                <div className="flex flex-col items-start justify-start py-0 pr-[22px] pl-0">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-cornflowerblue-200 text-left">
                      Lorem ipsomn dolor ipsons
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden-3.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4 z-[1]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative text-base tracking-[0.15px] leading-[150%] font-typography-caption text-text-primary text-left inline-block min-w-[80px]">
                      04/102020
                    </div>
                  </div>
                  <div className="w-[75px] hidden flex-col items-start justify-start">
                    <div className="self-stretch h-5 relative text-sm tracking-[0.17px] leading-[143%] font-typography-caption text-text-primary text-left inline-block">
                      Typography
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="w-[600px] hidden flex-row items-center justify-end py-0.5 px-0 box-border gap-[26px]">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <div className="relative text-xs tracking-[0.4px] leading-[166%] font-typography-caption text-text-secondary text-left">
                  Rows per page:
                </div>
                <div className="h-6 w-[38px] relative">
                  <div className="absolute top-[calc(50%_-_9px)] right-[23px] text-xs tracking-[0.4px] leading-[20px] font-typography-caption text-text-primary text-left">
                    10
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_12px)] right-[0px] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/arrowdropdownfilled.svg"
                  />
                </div>
              </div>
              <div className="relative text-xs tracking-[0.4px] leading-[166%] font-typography-caption text-text-primary text-left">
                1-5 of 13
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="h-10 w-10 rounded-81xl overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/chevronleftfilled.svg"
                    />
                  </div>
                </div>
                <div className="h-10 w-10 rounded-81xl overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/chevronrightfilled.svg"
                    />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </form>
    </div>
  );
}

export default BuscarUser;
