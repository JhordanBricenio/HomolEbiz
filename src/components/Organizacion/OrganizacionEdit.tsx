import {
  Switch,
  FormControlLabel,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import Nav from "../Nav/Nav";
import house from "../../assets/images/house.svg";

function EditOrg() {
  return (
    <div className="flex flex-row">
      <div>
        <Nav />
      </div>
      <div className="w-full h-[1546px] relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[10px] px-[20px] pb-[113px] box-border gap-[30px] leading-[normal] tracking-[normal] mq750:gap-[15px] mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq1225:pl-[51px] mq1225:pr-[51px] mq1225:box-border mq193:h-auto mq193:min-h-[1024]">
        <section className="w-[1200px] flex flex-col items-start justify-start max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-[27px]">
            <div className="rounded-8xs bg-cornflowerblue flex flex-row items-start justify-start pt-[22px] pb-[25px] pr-[18px] pl-[29px] z-[1]">
              <div className="h-[87px] w-[87px] relative rounded-8xs bg-cornflowerblue hidden" />
              <img className="h-10 w-10 relative z-[2]" alt="" src={house} />
            </div>
          </div>
          <main className="self-stretch rounded-3xs bg-white-color flex flex-col items-start justify-start pt-[18px] px-[27px] pb-[53px] box-border gap-[88px] max-w-full mt-[-44px] text-left text-base text-gray-500 font-roboto mq750:gap-[22px] mq1050:pb-[34px] mq1050:box-border mq450:pb-[22px] mq450:box-border mq1225:gap-[44px]">
            <div className="w-[1200px] h-[809px] relative rounded-3xs bg-white-color hidden max-w-full" />
            <div className="w-[337px] flex flex-row items-start justify-center max-w-full">
              <div className="relative z-[1]">Editar Organización</div>
            </div>

            <div className="self-stretch rounded-3xs bg-white-color flex flex-col items-start justify-start pt-[10px] pb-[10px] pr-2 pl-[5px] box-border gap-[8px] max-w-full mt-[-33px] text-darkslateblue mq750:pb-[41px] mq750:box-border">
              <div className="w-[1200px] h-[508px] relative rounded-3xs bg-white-color hidden max-w-full" />
              <div className="relative z-[1]">RAZÓN SOCIAL -012373378</div>
              <div className="self-stretch flex flex-row items-end justify-start gap-[20px] max-w-full text-gray-500 mq1050:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[36px] max-w-full mq1050:min-w-full mq450:gap-[18px]">
                  <div className="flex flex-row items-end justify-start gap-[20px] max-w-full mq1050:flex-wrap">
                    <div className="h-[100px] w-[100px] relative bg-black z-[1]" />
                    <div className="flex flex-col items-start justify-start gap-[10px] max-w-full z-[1]">
                      <div className="w-[239px] flex flex-row items-center justify-between gap-[20px]">
                        <div className="relative inline-block min-w-[58px]">
                          Mi perfil
                        </div>
                        <div className="flex flex-row items-start justify-start text-center text-sm text-white-color">
                          <div className="shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-cornflowerblue flex flex-row items-center justify-center py-[14.5px] px-[41px]">
                            <div className="w-12 relative font-semibold inline-block min-w-[48px]">
                              EDITAR
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative text-sm font-inter text-justify">
                        <p className="m-0">
                          Completa todos los datos para mejorar nuestro servicio
                          contigo
                        </p>
                        <p className="m-0">
                          Los campos marcados con * son obligatorios para usar
                          B2M
                        </p>
                        <p className="m-0">
                          Los logotipos indican requisito de homologación previa
                          para algunos compradores
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[36px] max-w-full text-xs text-white-color mq1050:flex-wrap mq450:gap-[18px]">
                    <div className="w-[369px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[369px] max-w-full mq750:min-w-full mq1050:flex-1">
                      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                          <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-3 pb-[13px] pr-11 pl-[45px] whitespace-nowrap z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border">
                            <div className="h-[39px] w-[267px] relative rounded-8xs bg-darkslateblue hidden" />
                            <div className="relative font-semibold z-[1]">
                              Breve descripción de la empresa
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-row items-start justify-start pt-[34px] px-[9px] pb-[22px] max-w-full z-[1] mt-[-19px] text-gray-500 font-inter border-[1px] border-solid border-gray-300">
                          <div className="h-[181px] w-[371px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
                          <div className="h-[119px] w-[311px] relative flex items-center shrink-0 z-[2]">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[251px] max-w-full">
                      <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                        <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-3 pb-[13px] pr-[34px] pl-[35px] whitespace-nowrap z-[2]">
                          <div className="h-[39px] w-[267px] relative rounded-8xs bg-darkslateblue hidden" />
                          <div className="relative font-semibold z-[1]">
                            Categorías CIU en las que participa
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-col items-start justify-start pt-[29px] px-7 pb-7 gap-[19px] max-w-full z-[1] mt-[-19px] text-sm text-cornflowerblue font-cabin border-[1px] border-solid border-gray-300">
                        <div className="w-[388px] h-[188px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
                        <div className="flex flex-row items-start justify-start gap-[11px]">
                          <div className="relative [text-decoration:underline] inline-block min-w-[68px] z-[2]">
                            Categoría 4
                          </div>
                          <div className="relative [text-decoration:underline] inline-block min-w-[68px] z-[2]">
                            Categoría 4
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[11px] mq450:flex-wrap">
                          <div className="relative [text-decoration:underline] inline-block min-w-[68px] z-[2]">
                            Categoría 3
                          </div>
                          <div className="relative [text-decoration:underline] inline-block min-w-[68px] z-[2]">
                            Categoría 6
                          </div>
                          <div className="relative [text-decoration:underline] text-black inline-block min-w-[68px] z-[2]">
                            Categoría 7
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[11px]">
                          <div className="relative [text-decoration:underline] inline-block min-w-[68px] z-[2]">
                            Categoría 1
                          </div>
                          <div className="relative [text-decoration:underline] inline-block min-w-[68px] z-[2]">
                            Categoría 2
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[11px]">
                          <div className="relative text-gray-900  inline-block min-w-[68px] z-[2]">
                            Categoría 1
                          </div>
                          <div className="relative  text-gray-900 inline-block min-w-[68px] z-[2]">
                            Categoría 9
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[207px] w-[100px] flex flex-col items-start justify-center pt-0 px-0 pb-[19px] box-border min-w-[236px] max-w-full text-xs text-white-color mq750:min-w-full mq1050:flex-1">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full mq1116:hidden">
                    <div className="flex flex-row items-start justify-start py-0 px-2.5">
                      <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-3 pb-[13px] pr-[20px] pl-[20px] z-[2]">
                        <div className="h-[39px] w-20 relative rounded-8xs bg-darkslateblue hidden" />
                        <div className="relative font-semibold inline-block min-w-[27px] z-[1]">
                          Tags
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex-1 shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-row items-start justify-start pt-7 px-2.5 pb-5 max-w-full z-[1] mt-[-19px] text-sm text-black font-cabin border-[1px] border-solid border-gray-300">
                      <div className="h-[170px] w-[338px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
                      <div className="self-stretch w-[280px] flex flex-row flex-wrap items-start justify-start gap-[18px_15px] z-[2]">
                        <div className="rounded-8xs bg-white-color flex flex-row items-start justify-start pt-[3px] pb-1 pr-[26px] pl-[27px] whitespace-nowrap border-[1px] border-solid border-gray-200">
                          <div className="h-7 w-[82px] relative rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                          <div className="relative inline-block min-w-[29px] z-[1]">
                            Tag 1
                          </div>
                        </div>
                        <div className="rounded-8xs bg-white-color flex flex-row items-start justify-start pt-[3px] pb-1 pr-[26px] pl-[27px] whitespace-nowrap border-[1px] border-solid border-gray-200">
                          <div className="h-7 w-[82px] relative rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                          <div className="relative inline-block min-w-[29px] z-[1]">
                            Tag 1
                          </div>
                        </div>
                        <div className="rounded-8xs bg-white-color flex flex-row items-start justify-start pt-[3px] pb-1 pr-[26px] pl-[27px] whitespace-nowrap border-[1px] border-solid border-gray-200">
                          <div className="h-7 w-[82px] relative rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                          <div className="relative inline-block min-w-[29px] z-[1]">
                            Tag 2
                          </div>
                        </div>
                        <div className="rounded-8xs bg-white-color flex flex-row items-start justify-start pt-[3px] pb-1 pr-[26px] pl-[27px] whitespace-nowrap border-[1px] border-solid border-gray-200">
                          <div className="h-7 w-[82px] relative rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                          <div className="relative inline-block min-w-[29px] z-[1]">
                            Tag 3
                          </div>
                        </div>
                        <div className="rounded-8xs bg-white-color flex flex-row items-start justify-start pt-[3px] pb-1 pr-[26px] pl-[27px] whitespace-nowrap text-cornflowerblue-200 border-[1px] border-solid border-gray-200">
                          <div className="h-7 w-[82px] relative rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                          <div className="relative inline-block min-w-[29px] z-[1]">
                            Tag 5
                          </div>
                        </div>
                        <div className="rounded-8xs bg-white-color flex flex-row items-start justify-start pt-[3px] pb-1 pr-[26px] pl-[27px] whitespace-nowrap text-cornflowerblue-200 border-[1px] border-solid border-gray-200">
                          <div className="h-7 w-[82px] relative rounded-8xs bg-white-color box-border hidden border-[1px] border-solid border-gray-200" />
                          <div className="relative inline-block min-w-[29px] z-[1]">
                            Tag 6
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1118px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[80.7px] max-w-full mq750:gap-[20px] mq1225:gap-[40px]">
              <div className="w-[443px] flex flex-row items-start justify-between gap-[20px] max-w-full z-[1] mq450:flex-wrap mq450:justify-center mq193:flex-wrap mq193:justify-center">
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full z-[1]">
                <div className="relative">Datos de la organización</div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[54px] max-w-full mq750:gap-[27px]">
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]">
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
                  <div className="self-stretch flex flex-row items-start justify-start gap-[43px] max-w-full mq750:gap-[21px] mq1225:flex-wrap mq1116:flex-wrap">
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
                        variant="filled"
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
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[35px] mq750:gap-[17px]">
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
            </div>
            <div className="w-[730px] flex flex-col items-start justify-start gap-[30px] max-w-full">
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
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}

export default EditOrg;
