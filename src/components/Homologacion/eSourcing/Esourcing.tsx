import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";

import iconsmorevert from "../../../assets/images/evalaucion/iconsmore-vert-24px.svg";
import SearchIcon from "@mui/icons-material/Search";

import Table from "./Table";
import Nav from "../../Nav/Nav";
function Esourcing() {
  return (
    <div className="flex flex-row ">
      <div>
        <Nav />
      </div>
      <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[40px] px-[20px] pb-[106px] box-border tracking-[normal] leading-[normal] lg:pl-[50px] lg:pr-[50px] lg:box-border mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
        <div className="w-10 h-[30px] absolute !m-[0] top-[0px] left-[8px] z-[2]">
          <div className="absolute top-[0px] left-[6.6px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-white-color w-7 h-[29.4px]" />
          <div className="absolute top-[0px] left-[0px] h-full flex flex-col items-center justify-center py-0 px-0 box-border w-full z-[1]">
            <div className="w-7 h-7 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center p-2">
                <img
                  className="h-5 w-5 relative"
                  loading="lazy"
                  alt=""
                  src={iconsmorevert}
                />
              </div>
            </div>
          </div>
        </div>
        <main className="w-[1203px] flex flex-row items-start justify-start relative max-w-full text-left text-sm text-white-color font-typography-body2">
          <div className="!m-[0] absolute top-[-24px] left-[13px] rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-3.5 px-7 pb-[17px] whitespace-nowrap z-[1]">
            <div className="h-[47px] w-[303px] relative rounded-8xs bg-darkslateblue hidden" />
            <div className="relative z-[2]">
              eSOURCING: Creación de requerimineto
            </div>
          </div>
          <section className="flex-1 rounded-8xs bg-white-color flex flex-col items-start justify-start pt-[67px] px-[13px] pb-[94px] box-border gap-[27px] max-w-full text-left text-sm text-white-color font-typography-body2 lg:pt-11 lg:pb-[61px] lg:box-border mq750:pt-[29px] mq750:pb-10 mq750:box-border">
            <div className="w-[1203px] h-[1152px] relative rounded-8xs bg-white-color hidden max-w-full" />

            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[55px] max-w-full mq750:gap-[27px]">
                <div className="w-[531px] flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                  <Button
                    className="h-[29px] w-[255px] z-[1]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "12",
                      background: "#2299e4",
                      borderRadius: "5px 0px 0px 5px",
                      "&:hover": { background: "#2299e4" },
                      width: 255,
                      height: 29,
                    }}
                  >
                    Participación exclusiva
                  </Button>
                  <div className="h-[29px] flex-1 rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none bg-white-color box-border flex flex-row items-center justify-start py-3.5 px-4 min-w-[179px] z-[2] border-[1px] border-solid border-grey-dark">
                    <img
                      className="h-6 w-6 relative hidden"
                      alt=""
                      src="/eyes.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[378px] max-w-full mq750:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[17px] max-w-full mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[237px] max-w-full">
                      <Button
                        className="self-stretch h-[30px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                        variant="contained"
                        size="small"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "10px",
                          background: "#2299e4",
                          borderRadius: "5px",
                          "&:hover": { background: "#2299e4" },
                          height: 30,
                        }}
                      >
                        PROVEEDOR DE LA CATEGORIA
                      </Button>
                    </div>
                    <Button
                      className="h-[30px] w-[200px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#fff",
                        fontSize: "10px",
                        background: "#2299e4",
                        borderRadius: "5px",
                        "&:hover": { background: "#2299e4" },
                        width: 200,
                        height: 30,
                      }}
                    >
                      AÑADIR SELECCIONADOS
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-[1086px] flex flex-row items-end justify-start gap-[10px] mt-2 max-w-full mq1050:flex-wrap">
                <FormControl sx={{ minWidth: 180 }} size="small">
                  <InputLabel id="demo-select-small-label">Rubro</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Age"
                    size="small"
                  >
                    <MenuItem value={10}>Subcategoría1</MenuItem>
                    <MenuItem value={20}>Subcategoría2</MenuItem>
                    <MenuItem value={30}>Subcategoría3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 180 }} size="small">
                  <InputLabel id="demo-select-small-label">País</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Age"
                    size="small"
                  >
                    <MenuItem value={10}>Perú</MenuItem>
                    <MenuItem value={20}>Bolivia</MenuItem>
                    <MenuItem value={30}>Chile</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  color="primary"
                  label="Search"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon>
                          <SearchIcon />
                        </Icon>
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="flex gap-5 ml-5 ">
                  <Button
                    className="h-8 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "10px",
                      background: "#2299e4",
                      borderRadius: "5px",
                      "&:hover": { background: "#2299e4" },
                      height: 32,
                    }}
                  >
                    APLICAR FILTROS
                  </Button>
                  <Button
                    className="h-8 w-[143px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "10px",
                      background: "#2299e4",
                      borderRadius: "5px",
                      "&:hover": { background: "#2299e4" },
                      width: 143,
                      height: 32,
                    }}
                  >
                    RESETEAR
                  </Button>
                </div>
              </div>
            </div>

            <div className="self-stretch flex flex-row items-start justify-start gap-[26px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[27px] max-w-[calc(100%_-_252px)] mq1050:max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-3.5">
                    <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-[11px] pb-3 pr-[30px] pl-[31px] z-[2]">
                      <div className="h-[39px] w-[145px] relative rounded-8xs bg-darkslateblue hidden" />
                      <div className="relative font-semibold inline-block min-w-[84px] z-[1]">
                        Promocionados
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-row items-start justify-start pt-[49px] pb-[23px] pr-[13px] pl-[37px] max-w-full z-[1] mt-[-19px] border-[1px] border-solid border-gray-200">
                    <div className="h-80 w-[919px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
                    <Table />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-3.5">
                    <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-[11px] px-[33px] pb-3 whitespace-nowrap z-[2]">
                      <div className="h-[39px] w-[235px] relative rounded-8xs bg-darkslateblue hidden" />
                      <div className="relative font-semibold z-[1]">
                        Resultados de la búsqueda
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-col items-start justify-start pt-9 px-3.5 pb-[119px] gap-[18px] max-w-full z-[1] mt-[-19px] border-[1px] border-solid border-gray-200 mq750:pt-9 mq750:pb-[77px] mq750:box-border">
                    <div className="w-[919px] h-[477px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
                    <TextField
                      className="[border:none] bg-[transparent] w-[418px] h-14 max-w-full z-[2]"
                      variant="outlined"
                      size="small"
                      color="primary"
                      label="Buscar proveedor"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon>
                              <SearchIcon />
                            </Icon>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Table />
                  </div>
                </div>
              </div>
              <div className="w-[226px] flex flex-col items-start justify-start mq1050:hidden">
                <div className="w-[173px] flex flex-row items-start justify-start py-0 px-3.5 box-border">
                  <div className="flex-1 rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-[11px] pb-3 pr-[22px] pl-[31px] z-[2]">
                    <div className="h-[39px] w-[145px] relative rounded-8xs bg-darkslateblue hidden" />
                    <div className="relative font-semibold inline-block min-w-[92px] z-[1]">
                      Seleccionados
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color flex flex-col items-end justify-start pt-[30px] pb-[21px] pr-3.5 pl-3 relative gap-[16px] z-[1] mt-[-20px] border-[1px] border-solid border-gray-200 mq750:pt-[30px] mq750:pb-5 mq750:box-border">
                  <div className="w-[228px] h-[581px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden z-[0] border-[1px] border-solid border-gray-200" />
                  <div className="shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color flex flex-row items-end justify-start pt-[21px] pb-2 pr-1.5 pl-6 gap-[12px] z-[2] text-left text-sm text-black font-typography-body2 border-[1px] border-solid border-gray-200">
                    <div className="h-[94px] w-[198px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                      <div className="flex flex-col items-start justify-start gap-[7px]">
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                          <div className="relative font-semibold z-[3]">
                            <div className="flex flex-row gap-3">
                            <p className="m-0">
                              Proveedor 1
                             
                            </p>
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
                            </div>
                            
                            <p className="m-0">RUC 0938211811</p>
                          </div>
                        </div>
                        <div className="relative underline font-semibold text-cornflowerblue inline-block min-w-[88px] z-[3]">
                          Ver showcase
                        </div>
                      </div>
                    </div>
                    <div className="h-10 w-10 relative bg-gainsboro z-[3]" />
                  </div>
                  <div className="w-[25px] h-[25px] absolute !m-[0] top-[19px] right-[15px] rounded-[50%] bg-cornflowerblue-100 z-[3]" />
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-0 text-left text-sm text-black font-typography-body2">
                    <div className="flex-1 shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color flex flex-row items-end justify-start pt-[21px] pb-2 pr-1.5 pl-6 gap-[12px] z-[2] border-[1px] border-solid border-gray-200">
                      <div className="h-[94px] w-[198px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                            <div className="relative font-semibold z-[3]">
                            <div className="flex flex-row gap-3">
                            <p className="m-0">
                              Proveedor 2
                             
                            </p>
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
                            </div>
                              <p className="m-0">RUC 0938211811</p>
                            </div>
                          </div>
                          <div className="relative underline font-semibold text-cornflowerblue inline-block min-w-[88px] z-[3]">
                            Ver showcase
                          </div>
                        </div>
                      </div>
                      <div className="h-10 w-10 relative bg-gainsboro z-[3]" />
                    </div>
                  </div>
                  <div className="w-[25px] h-[25px] absolute !m-[0] top-[127px] right-[17px] rounded-[50%] bg-cornflowerblue-100 z-[3]" />
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-0 text-left text-sm text-black font-typography-body2">
                    <div className="flex-1 shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color flex flex-row items-end justify-start pt-[21px] pb-2 pr-1.5 pl-6 gap-[12px] z-[2] border-[1px] border-solid border-gray-200">
                      <div className="h-[94px] w-[198px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                            <div className="relative font-semibold z-[3]">
                              <p className="m-0">Proveedor 1</p>
                              <p className="m-0">RUC 0938211811</p>
                            </div>
                          </div>
                          <div className="relative underline] font-semibold text-cornflowerblue-100 inline-block min-w-[88px] z-[3]">
                            Ver showcase
                          </div>
                        </div>
                      </div>
                      <div className="h-10 w-10 relative bg-gainsboro z-[3]" />
                    </div>
                  </div>
                  <div className="w-[25px] h-[25px] absolute !m-[0] top-[235px] right-[17px] rounded-[50%] bg-cornflowerblue-100 z-[3]" />
                  <div className="shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color flex flex-row items-end justify-start pt-[21px] pb-2 pr-1.5 pl-6 gap-[12px] z-[2] text-left text-sm text-black font-typography-body2 border-[1px] border-solid border-gray-200">
                    <div className="h-[94px] w-[198px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                      <div className="flex flex-col items-start justify-start gap-[7px]">
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                          <div className="relative font-semibold z-[3]">
                            <p className="m-0">Proveedor 1</p>
                            <p className="m-0">RUC 0938211811</p>
                          </div>
                        </div>
                        <div className="relative underline font-semibold text-cornflowerblue inline-block min-w-[88px] z-[3]">
                          Ver showcase
                        </div>
                      </div>
                    </div>
                    <div className="h-10 w-10 relative bg-gainsboro z-[3]" />
                  </div>
                  <div className="w-[25px] h-[25px] absolute !m-[0] right-[15px] bottom-[209px] rounded-[50%] bg-cornflowerblue-100 z-[3]" />
                  <div className="shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color flex flex-row items-end justify-start pt-[21px] pb-2 pr-1.5 pl-6 gap-[12px] z-[2] text-left text-sm text-black font-typography-body2 border-[1px] border-solid border-gray-200">
                    <div className="h-[94px] w-[198px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                      <div className="flex flex-col items-start justify-start gap-[7px]">
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                          <div className="relative font-semibold z-[3]">
                          <div className="flex flex-row gap-3">
                            <p className="m-0">
                              Proveedor 4
                             
                            </p>
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
                            </div>
                            <p className="m-0">RUC 0938211811</p>
                          </div>
                        </div>
                        <div className="relative underline font-semibold text-cornflowerblue inline-block min-w-[88px] z-[3]">
                          Ver showcase
                        </div>
                      </div>
                    </div>
                    <div className="h-10 w-10 relative bg-gainsboro z-[3]" />
                  </div>
                  <div className="w-[25px] h-[25px] absolute !m-[0] right-[15px] bottom-[101px] rounded-[50%] bg-cornflowerblue-100 z-[3]" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Esourcing;
