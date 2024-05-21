import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    Button,
    TextField
  } from "@mui/material";

export function LoginRegistro () {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-[35.6px] px-5 pb-[45px] box-border tracking-[normal] leading-[normal]">
    <div className="w-[576px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
      <Button
        className="h-[48.5px] w-[175px] z-[1]"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#1b3e85",
          borderRadius: "5px",
          "&:hover": { background: "#1b3e85" },
          width: 175,
          height: 48.5,
        }}
      >
        Registro
      </Button>
    </div>
    
    <form className="m-0 w-[576px] rounded-8xs bg-white flex flex-col items-start justify-start pt-[42px] px-[29px] pb-[29px] box-border gap-[24px] max-w-full mt-[-24.1px] lg:pt-[42px] lg:pb-5 lg:box-border">
      <div className="w-[576px] h-[1188px] relative rounded-8xs bg-white hidden max-w-full" />
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[11px] box-border max-w-full">
        <div className="relative text-sm font-roboto text-dimgray text-left z-[1]">
          Por favor revise y actualice su información para continuar al B2M
        </div>
      </div>
      <form className="m-0 self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[24px] max-w-full">
        <div className="flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-1">
            <div className="relative text-sm font-roboto text-black whitespace-pre-wrap text-left z-[1]">
              RUC
            </div>
            <input style={{borderColor: 'rgba(0, 0, 0, 0.38)'}} className="ml-4 border rounded-sm h-8 p-3 "  type="number" />
          </div>
          <div className="relative text-sm font-roboto text-black whitespace-pre-wrap text-left z-[1]">
            RAZON SOCIAL EBUSINESS INTERGHANGE ZONE SAC
          </div>
        </div>
        <div className="w-[245px] flex flex-row items-start justify-start py-0 px-px box-border">
          <FormControl
            className="h-14 flex-1 z-[1]"
            variant="outlined"
            sx={{
              borderColor: "rgba(0, 0, 0, 0.38)",
              borderRadius: "4px",
              width: "243px",
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
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary">Industria</InputLabel>
            <Select
              color="primary"
              name="industria"
              size="small"
              label="Industria"
              disableUnderline
              displayEmpty
            >
              <MenuItem value="eBIZ">eBIZ</MenuItem>
              <MenuItem value="Industria">Industria</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
            <FormControl
              className="h-14 flex-1 min-w-[159px] z-[1]"
              variant="outlined"
              sx={{
                borderColor: "rgba(0, 0, 0, 0.38)",
                borderRadius: "4px",
                width: "245px",
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
              <InputLabel color="primary">País</InputLabel>
              <Select
                color="primary"
                name="pais"
                id="pais"
                size="small"
                label="País"
                disableUnderline
                displayEmpty
              >
                <MenuItem value="Perú">Perú</MenuItem>
                <MenuItem value="Bolivia">Bolivia</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className="h-14 flex-1 min-w-[159px] z-[1]"
              variant="outlined"
              sx={{
                borderColor: "rgba(0, 0, 0, 0.38)",
                borderRadius: "4px",
                width: "245px",
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
              <InputLabel color="primary">Cuidad</InputLabel>
              <Select
                color="primary"
                name="ciudad"
                size="small"
                label="Cuidad"
                disableUnderline
                displayEmpty
              >
                <MenuItem value="Lima">Lima</MenuItem>
                <MenuItem value="Trujillo">Trujillo</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <Button
          className="self-stretch h-[47px] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1b3e85",
            borderRadius: "5px",
            "&:hover": { background: "#1b3e85" },
            height: 47,
          }}
        >
          Representante Autorizado de Firma de Contratos (*)
        </Button>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px]">
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="nombre"
            label="Nombres"
            size="small"
            placeholder="Todo"
            required={true}
            variant="outlined"
            type="text"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="telefono"
            label="Teléfono"
            size="small"
            placeholder="Todo"
            required={true}
            variant="outlined"
            type="number"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px]">
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="apellido"
            label="Apellidos"
            size="small"
            placeholder="Todo"
            required={true}
            variant="outlined"
            type="text"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="email"
            label="Email"
            size="small"
            placeholder="Todo"
            required={true}
            variant="outlined"
            type="email"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
        </div>
        <Button
          className="self-stretch h-[47px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1b3e85",
            borderRadius: "5px",
            "&:hover": { background: "#1b3e85" },
            height: 47,
          }}
        >
          Persona Contacto Comercial (*)
        </Button>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="name"
            label="Nombres"
            size="small"
            placeholder="Todo"
            required={true}
            variant="outlined"
            type="text"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="telefono"
            label="Teléfono"
            size="small"
            placeholder="Todo"
            required={true}
            variant="outlined"
            type="number"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[24px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[159px]">
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-14 z-[1]"
              color="primary"
              name="todos"
              label="Todos"
              size="small"
              placeholder="Todo"
              required={true}
              variant="outlined"
              type="text"
              sx={{
                "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                "& .MuiInputBase-root": { height: "56px" },
              }}
            />
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-14 z-[1]"
              color="primary"
              name="puesto"
              label="Puesto"
              size="small"
              placeholder="Todo"
              required={true}
              variant="outlined"
              type="text"
              sx={{
                "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                "& .MuiInputBase-root": { height: "56px" },
              }}
            />
          </div>
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="correo"
            label="Correo"
            size="small"
            placeholder="Todo"
            required={true}
            variant="outlined"
            type="email"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
        </div>
        <Button
          className="self-stretch h-[47px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#1b3e85",
            borderRadius: "5px",
            "&:hover": { background: "#1b3e85" },
            height: 47,
          }}
        >
          Persona Contacto Comercial (*)
        </Button>
      </form>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="todo"
            label="Nombre"
            size="small"
            placeholder="Todo"
            required={true}
            variant="outlined"
            type="text"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="telefono"
            label="Teléfono"
            size="small"
            required={true}
            variant="outlined"
            type="text"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <TextField
            className="[border:none] bg-[transparent] h-14 flex-1 min-w-[159px] z-[1]"
            color="primary"
            name="apellidos"
            label="Apellidos"
            size="small"
            placeholder="Todo"
            required={true}
            variant="outlined"
            type="text"
            sx={{
              "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
              "& .MuiInputBase-root": { height: "56px" },
            }}
          />
          <div className="flex-1 flex flex-col items-end justify-start gap-[24px] min-w-[159px]">
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-14 z-[1]"
              color="primary"
              name="correo"
              label="Correo"
              size="small"
              required={true}
              variant="outlined"
              type="email"
              sx={{
                "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                "& .MuiInputBase-root": { height: "56px" },
              }}
            />
            <div className="w-[147px] flex flex-row items-start justify-end py-0 px-0.5 box-border">
              <Button
                className="h-12 flex-1 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                color="primary"
                size="large"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#0079bf",
                  borderRadius: "5px",
                  "&:hover": { background: "#0079bf" },
                  height: 48,
                }}
              >
                CONTINUAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export default LoginRegistro